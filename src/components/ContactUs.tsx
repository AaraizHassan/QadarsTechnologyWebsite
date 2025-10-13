'use client';

import React, { useState } from "react";
import { contactDetails } from "@/data/contactDetails";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: contactDetails.services[0],
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: contactDetails.services[0],
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contactus" className="bg-[#E0E7FF] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
          {contactDetails.heading}
        </h2>
        <p className="text-[#4B5563] mb-8">{contactDetails.description}</p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 text-[#2563EB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 text-[#2563EB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 text-[#2563EB] bg-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            {contactDetails.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 text-[#2563EB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 text-[#2563EB] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-600 font-medium">{contactDetails.successMessage}</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium">{contactDetails.errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
