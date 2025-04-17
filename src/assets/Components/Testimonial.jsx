import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom hook for mouse position
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mousePosition;
}

export default function Testimonial() {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Get all unique categories
  const testimonials = [
    {
      id: 1,
      name: "Emma Richardson",
      position: "CTO at TechForward",
      image: "/api/placeholder/120/120",
      rating: 5,
      text: "Working with this developer was an absolute pleasure. Their technical expertise and attention to detail transformed our idea into a stunning, functional platform that exceeded our expectations.",
      category: "Web Development",
      color: "from-violet-600 to-blue-500",
      emoji: "🌐"
    },
    {
      id: 2,
      name: "Michael Donovan",
      position: "Founder of FitNow",
      image: "/api/placeholder/120/120",
      rating: 5,
      text: "Our fitness app has received incredible feedback from users thanks to the intuitive design and smooth performance. The developer's ability to understand our vision and implement it flawlessly was impressive.",
      category: "App Development",
      color: "from-green-500 to-teal-400",
      emoji: "📱"
    },
    {
      id: 3,
      name: "Sophia Chen",
      position: "Data Scientist at AnalyticsPro",
      image: "/api/placeholder/120/120",
      rating: 5,
      text: "The data visualization dashboard created for our company has revolutionized how we analyze and present information. The developer's expertise in both data science and UI design is truly exceptional.",
      category: "Data Analytics",
      color: "from-blue-600 to-indigo-500",
      emoji: "📊"
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Digital Marketing Director",
      image: "/api/placeholder/120/120",
      rating: 4,
      text: "The CMS developed for our content team has streamlined our workflow significantly. The system is intuitive, powerful, and exactly what we needed to scale our content operations.",
      category: "Web Development",
      color: "from-purple-600 to-pink-500",
      emoji: "🌐"
    },
    {
      id: 5,
      name: "Olivia Martinez",
      position: "API Integration Specialist",
      image: "/api/placeholder/120/120",
      rating: 5,
      text: "The API service built for our platform is exceptionally well-designed. The documentation, security implementation, and overall architecture show a deep understanding of modern API development practices.",
      category: "API Services",
      color: "from-yellow-500 to-orange-500",
      emoji: "🔌"
    },
    {
      id: 6,
      name: "Daniel Kim",
      position: "AI Research Lead",
      image: "/api/placeholder/120/120",
      rating: 5,
      text: "The machine learning model implemented has significantly improved our prediction accuracy. The developer's knowledge of cutting-edge ML techniques and ability to apply them practically is remarkable.",
      category: "Machine Learning",
      color: "from-red-500 to-pink-500",
      emoji: "🤖"
    }
  ];

  const categories = ['All', ...Array.from(new Set(testimonials.map(t => t.category)))];
  
  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  useEffect(() => {
    setIsClient(true);
    
    // Auto scroll setup
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % filteredTestimonials.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, filteredTestimonials.length]);

  useEffect(() => {
    // Reset active index when changing categories or view mode
    setActiveIndex(0);
  }, [selectedCategory, viewMode]);

  const handlePrevious = () => {
    setIsAnimating(true);
    setActiveIndex(prev => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setActiveIndex(prev => (prev + 1) % filteredTestimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`inline-block ${index < rating ? 'text-yellow-300' : 'text-gray-500'}`}
      >
        {index < rating ? '★' : '☆'}
      </motion.span>
    ));
  };
  
  // Fancy 3D hover effect for cards
  const calculateCardTransform = (e, cardElement) => {
    if (!cardElement) return { x: 0, y: 0 };
    
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    return { rotateX, rotateY };
  };

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Card flipping functionality
  const [flippedId, setFlippedId] = useState(null);

  const handleCardFlip = (id) => {
    if (flippedId === id) {
      setFlippedId(null);
    } else {
      setFlippedId(id);
    }
  };

  // Render grid view
  const renderGridView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="relative group h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div 
              className={`relative perspective-1000 w-full h-full cursor-pointer transition-all duration-700 ${flippedId === testimonial.id ? 'flip' : ''}`}
              onClick={() => handleCardFlip(testimonial.id)}
            >
              {/* Front of card */}
              <div className={`bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-gray-700 overflow-hidden shadow-2xl transition-all duration-500 relative ${flippedId === testimonial.id ? 'absolute backface-hidden' : 'backface-hidden'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-xl"></div>
                
                <div className="flex items-start mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-purple-500 shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-purple-400 text-sm">{testimonial.position}</p>
                    <div className="mt-1 text-sm">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <p className="text-gray-300 text-sm line-clamp-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/40 text-purple-300 border border-purple-800">
                    {testimonial.emoji} {testimonial.category}
                  </span>
                  
                  <motion.span 
                    className="text-xs text-purple-400 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>Tap to see more</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.span>
                </div>
              </div>
              
              {/* Back of card */}
              <div className={`absolute inset-0 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 overflow-hidden shadow-2xl transition-all duration-500 ${flippedId === testimonial.id ? 'backface-hidden rotate-y-180' : 'backface-hidden rotate-y-180 invisible'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10 transition-opacity duration-300`}></div>
                
                <div className="h-full flex flex-col">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-2 block">{testimonial.emoji}</span>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      Full Testimonial
                    </h3>
                  </div>
                  
                  <div className="flex-grow overflow-auto pr-2 custom-scrollbar">
                    <p className="text-gray-300 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 text-sm">{testimonial.name}</span>
                      <motion.span 
                        className="text-xs text-gray-400 flex items-center gap-1"
                        whileHover={{ x: -3 }}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span>Tap to flip back</span>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  // Render carousel view
  const renderCarouselView = () => {
    return (
      <div className="relative" ref={carouselRef}>
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="flex flex-wrap md:flex-nowrap items-center gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {filteredTestimonials[activeIndex] && (
                <>
                  <motion.div 
                    className="w-full md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-800 group-hover:scale-105 transition duration-300">
                        <img 
                          src={filteredTestimonials[activeIndex].image} 
                          alt={filteredTestimonials[activeIndex].name}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-2 left-0 right-0 text-center text-lg">
                          {filteredTestimonials[activeIndex].emoji}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="w-full md:w-2/3">
                    <motion.div 
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/60 shadow-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/40 text-purple-300 border border-purple-800">
                            {filteredTestimonials[activeIndex].category}
                          </span>
                          <div className="text-yellow-300 text-sm">
                            {renderStars(filteredTestimonials[activeIndex].rating)}
                          </div>
                        </div>
                      </div>
                      
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="text-gray-300 relative text-lg italic">
                          <span className="absolute -left-2 -top-2 text-4xl text-purple-500/20">❝</span>
                          <p className="pl-6 pt-4">
                            {filteredTestimonials[activeIndex].text}
                          </p>
                          <span className="absolute -right-2 bottom-0 text-4xl text-purple-500/20">❞</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="mt-8 border-t border-gray-700/50 pt-4 flex justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <div>
                          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {filteredTestimonials[activeIndex].name}
                          </h3>
                          <p className="text-purple-400">{filteredTestimonials[activeIndex].position}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          {activeIndex > 0 && (
                            <span className="text-gray-400 text-sm">{activeIndex + 1} of {filteredTestimonials.length}</span>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  const renderFloatingIndicators = () => {
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {filteredTestimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-purple-500 w-8' : 'bg-gray-600'}`}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    );
  };

  // Particle effect component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(20).fill(0).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.7, 0],
              scale: [0, Math.random() * 2 + 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      className="w-full py-20 px-4 text-white overflow-hidden relative" // Removed background colors here
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Effects */}
      <ParticleBackground />
      <div className="absolute top-40 left-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">CLIENT TESTIMONIALS</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Voices of Success
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Real feedback from clients who've experienced the transformative impact of my work.
            Explore their stories and see what we can create together.
          </motion.p>
        </motion.div>
        
        {/* View Mode & Category Selection */}
        <motion.div 
          className="mb-12 flex flex-col md:flex-row justify-center gap-6  items-center"
          variants={itemVariants}
        >
          {/* View Mode Selector */}
          <div className="flex bg-gray-800  backdrop-blur-sm rounded-full p-1.5 border border-gray-700/50 shadow-md">
            {['carousel', 'grid'].map((mode) => (
              <motion.button
                key={mode}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${viewMode === mode ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' : 'text-purple-800 hover:text-gray-300'}`}
                onClick={() => setViewMode(mode)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 
                  ${selectedCategory === category 
                    ? 'bg-purple-600 border-purple-500 text-white' 
                    : 'bg-gray-800 border-gray-700/50 text-gray-300 hover:border-gray-600'}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonial Content based on View Mode */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          {viewMode === 'carousel' && renderCarouselView()}
          {viewMode === 'grid' && renderGridView()}
        </motion.div>
        
        {/* Controls */}
        {viewMode === 'carousel' && (
          <motion.div 
            className="flex justify-center items-center gap-6"
            variants={itemVariants}
          >
            <motion.button 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-600 hover:to-purple-700 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg border border-gray-700"
              onClick={handlePrevious}
              disabled={isAnimating}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </motion.button>
            
            <motion.button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${isPlaying ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={togglePlayPause}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l7-7-7-7"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v14l11-7z"></path>
                </svg>
              )}
            </motion.button>
            <motion.button 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-600 hover:to-purple-700 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg border border-gray-700"
              onClick={handleNext}
              disabled={isAnimating}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </motion.div>
        )}
        {viewMode === 'carousel' && renderFloatingIndicators()}
      </div>
    </motion.div>
  );
}