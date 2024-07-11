import React from 'react';
import { FaBriefcase, FaMobileAlt, FaFlask, FaBinoculars } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: "Get your own customized web pages and take your business to the Internet",
    icon: <FaBriefcase className="text-blue-500 text-4xl" />,
  },
  {
    title: 'Mobile Development',
    description: "Want your services to be at everyone's fingertips, don't worry we've perfectly got you covered",
    icon: <FaMobileAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: 'ERP Development',
    description: 'Convert your offline SOPs to a complete online solutions and grow faster',
    icon: <FaFlask className="text-blue-500 text-4xl" />,
  },
  {
    title: 'Industry Training',
    description: 'We train employees as well as students to match industrial technology standards',
    icon: <FaBinoculars className="text-blue-500 text-4xl" />,
  },
  {
    title: 'UI Design',
    description: 'Upgrade your application in terms of looks and feels so that your clients enjoy your products',
    icon: <FaBinoculars className="text-blue-500 text-4xl" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Services</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
