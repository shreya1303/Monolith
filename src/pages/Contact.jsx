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
        import.meta.env.VITE_SERVICE_ID,
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
    <div className="min-h-screen p-8 py-24 bg-white">
      <div className="absolute w-56 h-56 rounded-full bg-[#d5e5d8] opacity-70 z-0 top-0 left-0 md:w-56 md:h-56 sm:w-40 sm:h-40 pointer-events-none"></div>
      <div className="absolute w-64 h-64 rounded-full bg-[#ffe6e9] opacity-70 z-0 top-[30%] right-0 md:w-56 md:h-56 sm:w-44 sm:h-44 pointer-events-none"></div>
      <div className="absolute w-72 h-72 rounded-full bg-[#d9efec] opacity-70 z-0 bottom-0 right-[40%] md:w-52 md:h-52 sm:w-50 sm:h-50 pointer-events-none"></div>
      <h1 className="text-6xl sm:text-xl md:text-4xl font-bold text-center mb-8 text-[#599960]">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 z-10">
        {/* Left Side: Contact Information */}
        <div className="w-full md:w-[600px] z-10 bg-white p-6 shadow-lg rounded-3xl border-2 border-black mb-6 md:mb-0">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>
              <strong>Phone:</strong> +917276174216
            </p>
            <p>
              <strong>Email:</strong> monolithacademyofficial@gmail.com
            </p>
            <p>
              <strong>Address:</strong> A8, Gatayri Apt., Bhande Plot chouk,
              Shakkardara, Nagpur. 440024
            </p>
            <p>
              <strong>Timings:</strong> 11 AM - 7 PM
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-[600px] bg-white p-6 shadow-lg rounded-3xl z-10 border-2 border-black">
          <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
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
              className="w-full p-3 border rounded h-28"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#484848] text-white font-bold p-3 rounded hover:text-white hover:bg-[#29523d]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
