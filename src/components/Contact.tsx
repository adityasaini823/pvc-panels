import React from 'react';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData); // For testing purposes
    alert(`Message Sent:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    emailjs
            .send(
              process.env.REACT_APP_EMAILJS_SERVICE_ID!,
              process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
              formData,
              process.env.REACT_APP_EMAILJS_PUBLIC_KEY!  // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    alert('Email sent successfully!');
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                }
            );
  };
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const whatsappNumber = '+918950282826'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent('Hi, I would like to know more about your PVC panel installation services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <span>+918950282826</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <span>info@pvcsolutions.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <span>Pahalwan Chownk, Panipat, India</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-8">
              <iframe
                src="https://maps.google.com/maps?q=pahalwan+chownk+%2Cpanipat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name='name'
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name='email'
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                onChange={handleChange}
                name='message'
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full transition duration-300"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};