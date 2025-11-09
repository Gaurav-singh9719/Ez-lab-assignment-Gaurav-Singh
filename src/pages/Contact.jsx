import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMsg("Form Submitted Successfully ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-bgpeach bg-texture relative overflow-hidden flex flex-col justify-center">
      {/* Mandala Decorative Elements */}
      <img
        src="/images/contact/mandala-left.png"
        alt="Mandala Left"
        className="absolute bottom-0 left-0 w-[320px] opacity-60 pointer-events-none select-none"
      />
      <img
        src="/images/contact/mandala-right.png"
        alt="Mandala Right"
        className="absolute top-0 right-0 w-[350px] opacity-60 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 px-6 md:px-20 py-24 items-center">
        {/* Left Text */}
        <div className="text-navy space-y-5 md:pr-10">
          <p className="text-[15px] leading-relaxed font-medium">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away.
          </p>
          <p className="text-[15px] leading-relaxed font-medium">
            Let’s catch up over coffee.
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-serif text-navy text-center mb-2">
            Join the Story
          </h3>
          <p className="text-center text-gray-600 mb-6 text-[15px]">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              className="input-default"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              className="input-default"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-default"
            />
            <textarea
              name="message"
              placeholder="Your message*"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="input-default"
            ></textarea>

            {successMsg && (
              <p className="text-green-600 text-sm text-center">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 text-sm text-center">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-accent w-full text-center"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-8 text-accent font-medium text-[15px] leading-relaxed">
            <p>vernita@varnanfilms.co.in</p>
            <p>+91 98736 84567</p>
          </div>
        </div>
      </div>
    </section>
  );
}
