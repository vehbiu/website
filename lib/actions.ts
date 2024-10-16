"use server";
import "server-only";

// curl 'https://challenges.cloudflare.com/turnstile/v0/siteverify' --data 'secret=verysecret&response=<RESPONSE>'
export async function verifyCaptcha(response: string): Promise<boolean> {
    // const url = `https://challenges.cloudflare.com/turnstile/v0/siteverify?secret=${process.env.TURNSTILE_SECRET_KEY!}&response=${response}`;
    console.log("Checking captcha response:", response);

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
            throw new Error("Failed to send message to Discord");
        }

        return { success: true, message: "Message sent successfully" };
    } catch (error: any) {
        console.error("Error sending message to Discord:", error);
        return { success: false, error: error.message };
    }
}
