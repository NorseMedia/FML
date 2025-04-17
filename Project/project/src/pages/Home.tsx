import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, Palette, Search, BarChart3, Wrench } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom, responsive websites that engage visitors and represent your brand perfectly.',
      icon: Palette
    },
    {
      title: 'SEO',
      description: 'Optimize your site to rank higher in search results and drive more organic traffic.',
      icon: Search
    },
    {
      title: 'Branding',
      description: 'Develop a cohesive brand identity that resonates with your target audience.',
      icon: BarChart3
    },
    {
      title: 'Maintenance',
      description: 'Keep your website secure, up-to-date, and performing at its best.',
      icon: Wrench
    }
  ];

  const projects = [
    {
      title: 'Coastal Retreat',
      category: 'Hospitality Website',
      imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Urban Fitness',
      category: 'Health & Wellness',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Artisan Bakery',
      category: 'Food & Beverage',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Tech Innovations',
      category: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Green Living',
      category: 'Eco-Friendly Brand',
      imageUrl: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-navy opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Anchor className="h-10 w-10 text-white" />
              <h2 className="text-2xl font-bold text-white">Blue Anchor Studio</h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Anchoring Your Brand in Digital Success
            </h1>
            <p className="text-xl text-silver mb-8 max-w-2xl">
              We create stunning websites and digital experiences that help businesses stand out and succeed in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn btn-accent">
                Get a Free Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-silver-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a comprehensive range of digital services to help your business thrive online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

      {/* Portfolio Carousel Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Take a look at some of our recent work that showcases our expertise and creativity.
            </p>
          </motion.div>

          <Carousel>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </Carousel>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-silver-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Let's Discuss Your Project</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to take your online presence to the next level? Fill out the form and we'll get back to you to discuss how we can help your business succeed online.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Contact us" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;