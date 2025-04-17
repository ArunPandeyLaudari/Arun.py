import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobile, 
  FaServer, 
  FaLayerGroup, 
  FaPlug,
  FaArrowRight,
  FaCodeBranch,
  FaBrain,
  FaDatabase,
  FaGlobe
} from 'react-icons/fa';
import { 
  SiFlutter, 
  SiLaravel,
  SiTensorflow,
  SiPython,
  SiDjango,
  SiReact
} from 'react-icons/si';

// Services organized by categories
const services = [
  // App Services Category
  {
    id: 1,
    title: 'Flutter App Development',
    description: 'Cross-platform mobile applications with beautiful UIs and seamless performance for Android and IOS.',
    icon: <FaMobile />,
    techIcon: <SiFlutter />,
    color: 'from-blue-400 to-cyan-400',
    category: 'app'
  },
  {
    id: 5,
    title: 'React Frontend Development',
    description: 'Interactive and responsive user interfaces built with React for modern web applications.',
    icon: <FaLayerGroup />,
    techIcon: <SiReact />,
    color: 'from-blue-500 to-indigo-500',
    category: 'web'
  },
  
  // Web Services Category
  {
    id: 3,
    title: 'Laravel Web Development',
    description: 'Powerful web applications built with Laravel featuring robust authentication, real-time updates, and elegant UIs.',
    icon: <FaGlobe />,
    techIcon: <SiLaravel />,
    color: 'from-red-500 to-pink-500',
    category: 'web'
  },
  {
    id: 4,
    title: 'Django Web Solutions',
    description: "Scalable and secure web applications powered by Django's robust framework and Python's versatility.",
    icon: <FaGlobe />,
    techIcon: <SiDjango />,
    color: 'from-green-600 to-teal-500',
    category: 'web'
  },
  
  // API Services Category
  {
    id: 6,
    title: 'REST API Dev & Integration',
    description: 'Well-structured RESTful APIs designed for performance, security, and seamless integration.',
    icon: <FaPlug />,
    techIcon: <FaServer />,
    color: 'from-emerald-400 to-teal-500',
    category: 'api'
  },
 
  // Machine Learning Category
  // {
  //   id: 8,
  //   title: 'Machine Learning Solutions',
  //   description: 'Custom ML models and AI-powered features to make your applications smarter and more efficient.',
  //   icon: <FaBrain />,
  //   techIcon: <SiTensorflow />,
  //   color: 'from-amber-400 to-orange-500',
  //   category: 'ml'
  // },
  {
    id: 9,
    title: 'Data Analytics & Insights',
    description: 'Turn your data into actionable business insights with advanced analytics and visualization solutions.',
    icon: <FaDatabase />,
    techIcon: <SiPython />,
    color: 'from-purple-500 to-pink-500',
    category: 'ml'
  }
];

// Categories configuration for filter tabs
const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'app', label: 'App Development' },
  { id: 'web', label: 'Web Development' },
  { id: 'api', label: 'API Services' },
  { id: 'ml', label: 'Machine Learning' }
];

const ServiceCard = ({ service, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-black/30 border border-gray-800 p-6 group h-full"
      whileHover={{ 
        y: -5,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
        borderColor: "rgba(139, 92, 246, 0.5)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${service.color}`}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-auto">
          {/* Service Icon with gradient background */}
          <div className={`p-3 rounded-2xl text-white bg-gradient-to-br ${service.color} mb-6 text-2xl shadow-lg`}>
            {service.icon}
          </div>
          
          {/* Tech Icon */}
          <div className="text-gray-500 text-xl opacity-50">
            {service.techIcon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>
        
        <motion.div
          className="mt-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className={`group inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
            Explore Service
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ repeat: isHovered ? Infinity : 0, repeatType: "reverse", duration: 0.6 }}
            >
              <FaArrowRight className={`text-sm bg-gradient-to-r ${service.color} text-transparent fill-current`} />
            </motion.span>
          </button>
        </motion.div>
      </div>
      
      {/* Corner accent */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl`}></div>
    </motion.div>
  );
};

const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-700 filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-orange-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-green-600 filter blur-3xl"></div>
      </div>
      
      <div className=" w-full  px-1 lg:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">EXPERTISE & SERVICES</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Elevate Your Digital Presence
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            From app development to machine learning solutions, I deliver cutting-edge 
            technologies that transform your ideas into exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Category Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20' 
                : 'bg-gray-900 text-gray-300 border border-gray-800 hover:border-purple-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid with animation when filtering */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // This forces re-render of the container when category changes
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={childVariants}
              layout // This enables smooth layout transitions
              className="h-full"
            >
              <ServiceCard
                service={service}
                isHovered={hoveredId === service.id}
                onHover={() => setHoveredId(service.id)}
                onLeave={() => setHoveredId(null)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state when no services match the filter */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No services found in this category.</p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="relative overflow-hidden bg-purple-600 hover:bg-purple-700 text-white py-3.5 px-8 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Let's Discuss Your Project
              <motion.span
                className="ml-2"
                animate={{ 
                  x: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 to-indigo-600 transition-opacity duration-300 ease-in-out"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;