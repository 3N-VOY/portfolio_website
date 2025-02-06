import React, { useEffect, useRef, useState } from "react";
import {
  Github as GitHub,
  Linkedin,
  FileText,
  Twitter,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS once
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  );
};

const Contact = () => {
  const contactRef = useRef(null);
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    if (validateForm()) {
      setIsSubmitting(true);

      // Prepare template parameters to match your template variables
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      // Using sendForm method with the form reference
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        )
        .then((result) => {
          console.log("SUCCESS!", result.text);
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
          alert("Something went wrong. Please try again later.");
        });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactRef.current.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative z-10 py-20 md:py-28 bg-gray-900/30 backdrop-blur-sm transition-all duration-1000 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get In Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/30 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision. Feel free to reach out
                using the form or through social platforms.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <SocialLink
                  href="https://github.com/3N-VOY"
                  icon={GitHub}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/alexander-xagoraris/"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://medium.com/@xagorarisalexander"
                  icon={FileText}
                  label="Medium"
                />
                <SocialLink
                  href="https://x.com/alex_xr1"
                  icon={Twitter}
                  label="Twitter"
                />
                <SocialLink
                  href="https://www.instagram.com/alex_devcode/"
                  icon={Instagram}
                  label="Instagram"
                />
              </div>

              <div>
                <h4 className="text-xl font-medium text-white mb-4">
                  Looking forward to hearing from you!
                </h4>
                <p className="text-gray-300">
                  Whether you have a question, proposal, or just want to say
                  hello, I'll do my best to get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/30">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-300">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-800/50 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-blue-500 text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-800/50 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-blue-500 text-white`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-800/50 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } rounded-lg focus:outline-none focus:border-blue-500 text-white min-h-[120px]`}
                      placeholder="Your message"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition transform hover:translate-y-[-2px] hover:shadow-lg w-full flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
