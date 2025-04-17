import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg border border-silver transition-all duration-300 hover:shadow-xl"
    >
      <div className="bg-navy-light inline-flex p-3 rounded-lg text-white mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;