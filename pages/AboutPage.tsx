
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold">About Timber & Bolt</h1>
          <p className="mt-4 text-xl text-blue-200">Building a legacy of quality and trust since 1995.</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our History</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 1995 by a family of passionate builders, Timber & Bolt started as a small local shop with a big dream: to provide the community with superior building materials and honest, expert advice.
              </p>
              <p className="text-lg text-gray-600">
                Over the decades, we've grown into a leading supplier in the region, but our core values remain unchanged. We believe in the power of quality materials to create lasting structures and beautiful spaces.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/history/800/600" alt="Old workshop" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower builders, designers, and DIY enthusiasts by providing an extensive range of high-quality products, exceptional customer service, and reliable expertise that turns any project vision into a reality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted and innovative partner in the building materials industry, known for our commitment to quality, sustainability, and the success of our customers' projects, big and small.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark">Our Infrastructure</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art warehouse and distribution center ensures that we have the stock you need, when you need it. We maintain optimal conditions to preserve the quality of our wood products and can handle orders of any size with efficiency.
          </p>
          <img src="https://picsum.photos/seed/warehouse/1200/600" alt="Warehouse interior" className="mt-8 rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
