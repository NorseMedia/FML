import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Target, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality work that exceeds expectations.',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their needs and create tailored solutions.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'We stay at the forefront of digital trends to provide innovative solutions that drive results.',
      icon: Target
    },
    {
      title: 'Reliability',
      description: 'We deliver on time and on budget, maintaining clear communication throughout the process.',
      icon: Clock
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-silver">
              Learn more about Blue Anchor Studio and our mission to help businesses succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Anchor className="h-8 w-8 text-navy" />
                <h2 className="text-2xl font-bold text-navy">Our Story</h2>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-navy">
                Anchoring Brands in the Digital Ocean Since 2018
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Blue Anchor Studio was founded with a simple mission: to help businesses navigate the ever-changing digital landscape and establish a strong online presence that drives growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of passionate designers and developers has grown into a full-service digital agency, serving clients across various industries. Our approach combines creativity with strategic thinking to deliver solutions that not only look great but also achieve tangible results.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every business, regardless of size, deserves a professional online presence that accurately represents their brand and connects with their target audience. This belief guides everything we do, from the initial consultation to the final delivery.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-silver-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              These core principles guide our work and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-navy-light inline-flex p-3 rounded-full text-white mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
              We follow a structured approach to ensure every project is completed efficiently and effectively.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-light"></div>
            
            {/* Process Steps */}
            <div className="space-y-24 relative">
              {[
                {
                  number: '01',
                  title: 'Discovery',
                  description: 'We start by understanding your business, goals, target audience, and competition to develop a strategic plan.'
                },
                {
                  number: '02',
                  title: 'Design',
                  description: 'Our creative team develops visual concepts and prototypes that align with your brand identity and project goals.'
                },
                {
                  number: '03',
                  title: 'Development',
                  description: 'We build your website or digital product using the latest technologies, ensuring it is responsive, fast, and user-friendly.'
                },
                {
                  number: '04',
                  title: 'Delivery & Support',
                  description: 'After thorough testing, we launch your project and provide ongoing support to ensure continued success.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <span className="text-5xl font-bold text-navy-light opacity-30">{step.number}</span>
                    <h3 className="text-2xl font-bold mb-3 text-navy">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white font-bold text-xl">
                    {parseInt(step.number)}
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-silver mb-8">
              Let's create something amazing together. Contact us today to get started.
            </p>
            <a href="/contact" className="btn btn-accent">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;