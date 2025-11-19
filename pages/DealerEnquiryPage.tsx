import React, { useState } from 'react';

const DealerEnquiryPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending your enquiry...');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Thank you for your enquiry! We will contact you shortly.');
      setFormData({ companyName: '', contactName: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <div className="bg-primary text-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">Dealer Enquiry</h1>
          <p className="mt-4 text-xl text-light/80">Partner with us to bring quality products to your customers.</p>
        </div>
      </div>

      <div className="bg-base py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-light p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brown mb-6">Become a Partner</h2>
            <p className="text-dark mb-8">Fill out the form below, and our partnership team will get in touch with you to discuss the opportunities.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-dark">Company Name</label>
                  <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-dark">Contact Name</label>
                  <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark">Message / Comments</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-light bg-secondary hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                  Submit Enquiry
                </button>
              </div>
              {formStatus && <p className="text-center text-green-600 mt-4">{formStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerEnquiryPage;