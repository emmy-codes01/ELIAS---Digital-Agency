import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          At <strong>ELIAS</strong>, we merge creativity with strategy to <b>help</b> you land those clients you dream of by craft stunning brand identities and seamless digital experiences. We’re passionate about helping you grow businesses through strategy, impactful design and technology.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="p-8 bg-gray-100 rounded-2xl shadow-sm flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Over 5 years of industry experience</li>
            <li>✔ A perfect balance of aesthetics & functionality</li>
            <li>✔ Client-first approach to branding & web solutions</li>
            <li>✔ Cutting-edge design trends & latest technologies</li>
            <li>✔ On-time delivery with a seamless process</li>
          </ul>
        </div>

        <div className="p-8 bg-gray-100 rounded-2xl shadow-sm flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-gray-900">Our Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Brand Identity & Logo Design</li>
            <li>✔ Website Design & Development</li>
            <li>✔ UI/UX & Product Design</li>
            <li>✔ Social Media & Digital Branding</li>
            <li>✔ Rebranding & Digital Transformation and more</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-16">
        <a href="https://wa.me/639132489550?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20creative%20services.%20Looking%20forward%20to%20discussing%20how%20you%20can%20help%20with%20my%20project%20needs." className="bg-[#0a1f44] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-blue- transition">
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
