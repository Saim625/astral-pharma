import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message.");
      });
  };

  // Get current time for template
  const currentTime = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-600 mt-1" />
              <div>
                <p>+92 306 7311786</p>
                <p>+92 321 7311786</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <p>
                Office No. 66, Street 8, Block V,
                <br />
                New Multan Colony, Multan
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 mt-1" />
              <p>astralpharma786@gmail.com</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input type="hidden" name="title" value="New Contact Request" />
            <input type="hidden" name="time" value={currentTime} />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
