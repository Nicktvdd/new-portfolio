"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const text = "Let's seal the deal!";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS env vars are missing — message cannot be sent.");
      setError(true);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setSuccess(true);
        form.current?.reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={`${index}-${letter}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            🦭
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-orange-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 md:p-24"
          noValidate={false}
        >
          <span>Dear Nick,</span>

          <label htmlFor="user_message" className="sr-only">
            Your message
          </label>
          <textarea
            id="user_message"
            name="user_message"
            required
            autoFocus
            placeholder="Tell me what you'd like to build together…"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none placeholder:text-slate-500"
          />

          <span>My name is:</span>
          <label htmlFor="user_name" className="sr-only">
            Your name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            autoComplete="name"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />

          <span>My mail address is:</span>
          <label htmlFor="user_email" className="sr-only">
            Your email address
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            autoComplete="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="bg-purple-200 rounded font-semibold text-gray-700 p-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending…" : "Send"}
          </button>

          {success && (
            <span role="status" className="text-green-700 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span role="alert" className="text-red-700 font-semibold">
              Something went wrong. Please try again or email me directly.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
