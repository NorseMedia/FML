import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Search, BarChart3, Wrench, Code, Globe, Shield, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      title: 'Web Design',
      description: 'Custom, responsive websites that engage visitors and represent your brand perfectly.',
      icon: Palette,
      details: [
        'Custom UI/UX design tailored to your brand',
        'Mobile-first responsive layouts',
        'Interactive prototypes',
        'User experience optimization'
      ]
    },
    {
      title: 'SEO Optimization',
      description: 'Optimize your site to rank higher in search results and drive more organic traffic.',
      icon: Search,
      details: [
        'Keyword research and strategy',
        'On-page SEO optimization',
        'Technical SEO audits',
        'Content strategy for SEO'
      ]
    },
    {
      title: 'Branding',
      description: 'Develop a cohesive brand identity that resonates with your target audience.',
      icon: BarChart3,
      details: [
        'Brand strategy development',
        'Logo and visual identity design',
        'Brand guidelines creation',
        'Brand messaging and voice'
      ]
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website secure, up-to-date, and performing at its best.',
      icon: Wrench,
      details: [
        'Regular security updates',
        'Performance optimization',
        'Content updates',
        'Technical support'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Custom Development',
      description: 'Tailored web applications and features built to meet your specific business needs.',
      icon: Code
    },
    {
      title: 'E-commerce Solutions',
      description: 'Powerful online stores that drive sales and provide excellent customer experiences.',
      icon: Globe
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify and address vulnerabilities.',
      icon: Shield
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your website for better user experience and improved search rankings.',
      icon: Zap
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-silver">
              Comprehensive digital solutions to help your business thrive online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <div className="bg-navy-light inline-flex p-3 rounded-lg text-white mb-4">
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-navy">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-silver-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle mx-auto">
              Beyond our core offerings, we provide specialized services to meet your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-silver mb-8">
              Contact us today to discuss your project and how we can help your business succeed online.
            </p>
            <a href="/contact" className="btn btn-accent">
              Get a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;