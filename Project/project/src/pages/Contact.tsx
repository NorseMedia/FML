import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@blueanchorstudio.com',
      link: 'mailto:info@blueanchorstudio.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '123 Design Street, Creative City, CA 90210',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9am - 5pm',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Twitter, name: 'Twitter', link: '#' },
    { icon: Linkedin, name: 'LinkedIn', link: '#' },
    { icon: Facebook, name: 'Facebook', link: '#' }
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-silver">
              Have a question or ready to start your project? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-navy">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're excited to hear about your project!
              </p>
              
              <div className="bg-silver-light p-6 rounded-lg">
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-navy">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or need assistance? Reach out to us using any of the methods below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-navy-light inline-flex p-3 rounded-full text-white mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </a>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-navy">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="bg-silver p-3 rounded-full text-navy hover:bg-navy hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355529826!2d-118.69192047471653!3d34.02016130653036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1625687246430!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Blue Anchor Studio Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;