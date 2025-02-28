import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-stone-600">
            We'd love to hear from you. Reach out for reservations, inquiries, or to provide feedback on your dining experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation</option>
                        <option value="private-dining">Private Dining</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-stone-50 p-8 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">Our Location</h3>
                    <span>Main Office</span><p className="text-stone-600">Indrawati-6 Sindhupalchok</p>
                   <span>Contact office</span> <p className="text-stone-600">Budhanilkantha, Kathamndu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Phone Number</h3>
                    <p className="text-stone-600">(977) 9860863378</p>
                    <p className="text-stone-600">(977) 9869393088 (Reservations)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Email Address</h3>
                    <p className="text-stone-600">kabirajacharya777@hotmail.com</p>
                    <p className="text-stone-600">reservations@hotmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Opening Hours</h3>
                    <p className="text-stone-600">Sun - Tue: 24 hours</p>
                    <p className="text-stone-600">Wesneday: Closed</p>
                    <p className="text-stone-600">Thu -  Sat: 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-stone-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">Find Us</h2>
          <div className="h-96 bg-stone-200 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784492404045!3d40.75798833440646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Reservation CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-amber-50 p-8 rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Make a Reservation</h2>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            For immediate reservations, please call us at (123) 456-7891 or use our online reservation system.
          </p>
          <button className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition-colors font-medium">
            Reserve a Table
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;