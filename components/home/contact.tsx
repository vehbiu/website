"use client";

import contact from "@/data/contact";
import React, { createElement, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Send } from 'lucide-react';
import { submitContactForm } from "@/lib/actions";
import { motion, AnimatePresence } from "framer-motion";
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'

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
    <section id="contact" className="py-24 bg-slate-800/50">
      <div className="mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always excited to collaborate on innovative projects and explore new opportunities. 
            Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contact.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl hover:border-emerald-400/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {createElement(item.icon, { size: 32, className: 'text-emerald-400' })}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-sm">Get in touch</p>
                </div>
              </a>
            ))}
          </div>

          <div className="relative bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-slate-700/30 backdrop-blur-sm rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.h3
                      className="mb-2 text-2xl font-bold text-emerald-400"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      Thank you! 🎉
                    </motion.h3>
                    <motion.p
                      className="text-lg text-slate-300"
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
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      autoComplete="off"
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/30 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                    />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-slate-600/50 rounded-xl border border-slate-500/30">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: "email" })}
                          className={cn(
                            "flex-1 py-3 text-sm font-medium rounded-l-xl transition-colors duration-300",
                            formData.contactMethod === "email" && "bg-emerald-600 text-white",
                            formData.contactMethod !== "email" && "bg-transparent text-slate-300 hover:bg-slate-700/50"
                          )}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: "other" })}
                          className={cn(
                            "flex-1 py-3 text-sm font-medium rounded-r-xl transition-colors duration-300",
                            formData.contactMethod === "other" && "bg-emerald-600 text-white",
                            formData.contactMethod !== "other" && "bg-transparent text-slate-300 hover:bg-slate-700/50"
                          )}
                        >
                          Other
                        </button>
                      </div>
                    </div>
                  </div>

                  {formData.contactMethod === "other" && (
                    <input
                      type="text"
                      id="platform"
                      name="platform"
                      value={formData.platform}
                      onChange={handleChange}
                      required
                      placeholder="Platform Name"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/30 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                    />
                  )}

                  <input
                    type={formData.contactMethod === "email" ? "email" : "text"}
                    id="identifier"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    placeholder={formData.contactMethod === "email" ? "Your Email" : "Platform Identifier"}
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/30 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                  />

                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/30 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>

                  {error && (
                    <div className="p-4 text-red-400 bg-red-900/20 border border-red-400/30 rounded-xl">
                      {error}
                    </div>
                  )}

                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    ref={captchaRef}
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-400/25 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
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