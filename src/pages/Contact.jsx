import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Accessing env variables
        import.meta.env.VITE_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_API_KEY
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 bg-gray-100">
      {/* Left Side: Contact Information */}
      <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          <strong>Address:</strong> A8, Gatayri Apt., Bhande Plot chouk,
          Shakkardara , Nagpur. 440024
        </p>
        <p>
          <strong>Email:</strong> monolithacademyofficial@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +917276174216
        </p>
        <p>
          <strong>Timings:</strong> 11 AM - 7 PM
        </p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
