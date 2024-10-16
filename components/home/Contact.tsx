"use client";
import React, { createElement, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contact from "@/data/contact";
import { submitContactForm } from "@/lib/actions";
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "email",
    platform: "",
    identifier: "",
    message: ""
  });
  const captchaRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    let captchaResponse;
    if (captchaRef.current) {
      captchaResponse = (captchaRef.current as TurnstileInstance).getResponse();
      if (!captchaResponse) {
        setError("Please respond to the captcha challenge.");
        return;
      }
    } else {
      setError("Please respond to the captcha challenge.");
      return;
    }

    const contactInfo = formData.contactMethod === "email"
      ? formData.identifier
      : `${formData.platform}:${formData.identifier}`;

    const submissionData = {
      name: formData.name,
      email: contactInfo,
      message: formData.message
    };

    const result = await submitContactForm(submissionData, captchaResponse);

    if (result.success) {
      console.log("Form submitted:", submissionData);
      setFormData({ name: "", contactMethod: "email", platform: "", identifier: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.error("Error:", result.error);
      setError(result.error || "An error occurred while submitting the form.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container px-6 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-2xl font-semibold">Contact Information</h3>
            <p className="mb-6">Feel free to reach out if you have any questions or just want to connect!</p>
            <div className="space-y-4">
              {contact.map((item) => (
                <div key={item.name} className="flex items-center">
                  {createElement(item.icon, { size: 24, className: "mr-4 text-indigo-400" })}
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-indigo-400">{item.name}</a>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.h3
                      className="mb-2 text-2xl font-bold text-indigo-400"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      Thank you! 🎉
                    </motion.h3>
                    <motion.p
                      className="text-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Your message has been sent successfully. I'll get back to you as soon as possible!
                    </motion.p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      autoComplete="off"
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Preferred Contact Method</label>
                    <div className="flex items-center justify-between bg-gray-700 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: "email" })}
                        className={cn(
                          "flex-1 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200",
                          formData.contactMethod === "email" && "bg-indigo-600 text-white",
                          formData.contactMethod !== "email" && "bg-transparent text-gray-300 hover:bg-gray-600"
                        )}
                      >
                        Email
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: "other" })}
                        className={cn(
                          "flex-1 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200",
                          formData.contactMethod === "other" && "bg-indigo-600 text-white",
                          formData.contactMethod !== "other" && "bg-transparent text-gray-300 hover:bg-gray-600"
                        )}
                      >
                        Other
                      </button>
                    </div>
                  </div>
                  {formData.contactMethod === "other" && (
                    <div className="mb-4">
                      <label htmlFor="platform" className="block mb-2 text-sm font-medium">Platform Name</label>
                      <input
                        type="text"
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <label htmlFor="identifier" className="block mb-2 text-sm font-medium">
                      {formData.contactMethod === "email" ? "Email" : "Platform Identifier"}
                    </label>
                    <input
                      type={formData.contactMethod === "email" ? "email" : "text"}
                      id="identifier"
                      name="identifier"
                      value={formData.identifier}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                  {error && (
                    <div className="p-2 mb-4 text-red-500 bg-red-100 border border-red-400 rounded">
                      {error}
                    </div>
                  )}
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    ref={captchaRef}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 font-semibold text-white transition duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;