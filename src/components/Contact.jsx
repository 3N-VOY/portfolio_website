import React, { useRef, useState } from "react";
import {
  Github as GitHub,
  Linkedin,
  FileText,
  Twitter,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import useReveal from "../hooks/useReveal";
import Kicker from "./Kicker";

// Initialize EmailJS once
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const socialLinks = [
  { href: "https://github.com/3N-VOY", icon: GitHub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/alexander-xagoraris/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://medium.com/@xagorarisalexander",
    icon: FileText,
    label: "Medium",
  },
  { href: "https://x.com/alex_xr1", icon: Twitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/alex_devcode/",
    icon: Instagram,
    label: "Instagram",
  },
];

const inputClasses = (hasError) =>
  `w-full p-3 bg-transparent border ${
    hasError ? "border-red-500" : "border-line"
  } focus:outline-none focus:border-brass text-bone placeholder:text-faint transition-colors`;

const Contact = () => {
  const contactRef = useReveal();
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFailed(false);

    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        )
        .then(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Reset submitted status after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("FAILED", error);
          setIsSubmitting(false);
          setFailed(true);
        });
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-24 md:py-32 border-t border-line transition-all duration-700 opacity-0 translate-y-6"
    >
      <div className="mx-auto max-w-site px-6 md:px-10">
        <Kicker className="mb-12">Contact</Kicker>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-display font-medium text-3xl md:text-4xl text-bone leading-snug tracking-tight mb-6 text-balance">
              Let's talk about AI, systems, or what you're building next.
            </h2>
            <p className="text-fog leading-relaxed mb-10">
              I'm open to new projects, consulting engagements and MVP builds
              for companies. Reach out through the form or any of the
              platforms below and I'll get back to you as soon as I can.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 border border-line text-fog hover:text-bone hover:border-fog transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-brass/40 p-6">
                <p className="font-display text-lg text-bone mb-1">
                  Message sent.
                </p>
                <p className="text-sm text-fog">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[11px] uppercase tracking-label text-faint mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses(errors.name)}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] uppercase tracking-label text-faint mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses(errors.email)}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] uppercase tracking-label text-faint mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses(errors.message)} min-h-[140px]`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {failed && (
                  <p className="mb-6 text-sm text-red-500">
                    Something went wrong sending your message. Please try
                    again, or reach me directly on LinkedIn.
                  </p>
                )}

                <button
                  type="submit"
                  className={`inline-flex items-center gap-2 px-7 py-3 bg-brass text-night font-medium text-sm hover:bg-brass-bright transition-colors ${
                    isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
