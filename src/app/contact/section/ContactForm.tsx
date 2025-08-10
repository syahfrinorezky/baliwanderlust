/** @format */

"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "info@baliwanderlust.com",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+62 123 456 789",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Jl. Raya Ubud No. 123, Bali",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to help plan your dream journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 border border-gray-300 dark:border-none transition-colors">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-yellow-500 text-sm">{item.info}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-gray-100 dark:bg-neutral-700 rounded-lg overflow-hidden h-32 flex items-center justify-center border border-gray-300 dark:border-none mt-6">
              <div className="text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.085898153196!2d115.25771562611698!3d-8.505981007609698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d697fc746c9%3A0xa16d285df4dcaa3e!2sJl.%20Raya%20Ubud%2C%20Kecamatan%20Ubud%2C%20Kabupaten%20Gianyar%2C%20Bali%2080571!5e0!3m2!1sid!2sid!4v1753609485677!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-gray-300 dark:border-none">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">
                      <User className="w-4 h-4 text-yellow-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">
                      <Mail className="w-4 h-4 text-yellow-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">
                      <Phone className="w-4 h-4 text-yellow-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm transition-colors"
                      placeholder="+62 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-2 block">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm transition-colors">
                      <option value="">Select subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="booking">Package Booking</option>
                      <option value="custom">Custom Package</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-sm mb-2">
                    <MessageSquare className="w-4 h-4 text-yellow-500" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white text-sm transition-colors resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
