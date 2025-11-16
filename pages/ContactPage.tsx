
import React, { useState } from 'react';
import Icon from '../components/Icon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">Get In Touch</h1>
          <p className="mt-4 text-xl text-blue-200">We're here to help. Contact us with any questions or for a quote.</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Send Message
                  </button>
                </div>
                {formStatus && <p className="text-center text-green-600">{formStatus}</p>}
              </form>
            </div>
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Icon icon="location" className="flex-shrink-0 h-8 w-8 text-secondary mt-1"/>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Address</h3>
                    <p className="text-gray-600">123 Industrial Way, Suite 45, Buildtown, ST 12345</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon icon="phone" className="flex-shrink-0 h-8 w-8 text-secondary mt-1"/>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon icon="email" className="flex-shrink-0 h-8 w-8 text-secondary mt-1"/>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">sales@timberandbolt.com</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                 <h3 className="text-lg font-semibold">Store Hours</h3>
                 <p className="text-gray-600 mt-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
                 <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                 <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="w-full">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086318518987!2d-122.4194154846816!3d37.77492957975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e95c6ad%3A0x44623ca2f451ca5d!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618493132715!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Store Location"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
