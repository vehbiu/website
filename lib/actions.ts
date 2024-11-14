"use server";
import "server-only";

export async function verifyCaptcha(response: string): Promise<boolean> {
    // console.log("Checking captcha response:", response);

    try {
        const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await resp.json();
        console.log(data);
        return data.success;
    } catch {
        return false;
    }
}

const SUBMIT_RETRY_DELAY = 5000;
const SUBMIT_RETRY_AMOUNT = 3;

export async function submitContactForm(formData: { name: string; email: string; message: string }, captcha: string) {
    const verified = await verifyCaptcha(captcha);
    if (!verified) {
        return { success: false, error: "Failed to verify captcha" };
    }
    const embed = {
        title: "New Contact Form Submission",
        fields: [
            { name: "Name", value: formData.name, inline: true },
            { name: "Email", value: formData.email, inline: true },
            { name: "Message", value: formData.message },
        ],
        color: 0x00ff00, // Green
    };

    let resp: { success: boolean; message?: string; error?: string; } = { success: false };

    for (let i = 0; i < SUBMIT_RETRY_AMOUNT; i++) {
        try {
            const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "Contact Form",
                    content: "@everyone",
                    embeds: [embed]
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to send message: ${response.statusText}`);
            }

            resp =  { success: true, message: "Message sent successfully" };
            break;
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            resp = { success: false, error: errorMessage };
        }
    }

    return resp;
}
