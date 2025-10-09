'use client';

import React, { useState } from "react";
import { contactDetails } from "@/data/contactDetails";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // 👈 added email
    service: contactDetails.services[0],
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({ name: "", email: "", service: contactDetails.services[0], subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contactus" className="bg-hero-background py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">{contactDetails.heading}</h2>
        <p className="text-gray-600 mb-8">{contactDetails.description}</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 bg-background p-8 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* 👇 added email field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {contactDetails.services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

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
