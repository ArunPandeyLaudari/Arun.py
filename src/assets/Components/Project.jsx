import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "React"],
      description: "A full-featured online store with secure payments, user authentication, and responsive design for optimal customer experience.",
      githubLink: "https://github.com/username/e-commerce",
      demoLink: "https://demo-ecommerce.example.com"
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      thumbnail: "/api/placeholder/400/240",
      categories: ["App Development", "Flutter"],
      description: "Cross-platform mobile application for tracking workouts, nutrition, and progress with beautiful UI and seamless performance.",
      githubLink: "https://github.com/username/fitness-tracker",
      demoLink: "https://demo-fitness.example.com"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Data Analytics", "React"],
      description: "Interactive dashboard with advanced analytics and visualization tools for turning complex data into actionable business insights.",
      githubLink: "https://github.com/username/data-dashboard",
      demoLink: "https://demo-dashboard.example.com"
    },
    {
      id: 4,
      title: "Content Management System",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "Django"],
      description: "Scalable and secure web application powered by Django's robust framework and Python's versatility for content management.",
      githubLink: "https://github.com/username/cms-project",
      demoLink: "https://demo-cms.example.com"
    },
    {
      id: 5,
      title: "RESTful API Service",
      thumbnail: "/api/placeholder/400/240",
      categories: ["API Services", "Node.js"],
      description: "Well-structured RESTful APIs designed for performance, security, and seamless integration with third-party services.",
      githubLink: "https://github.com/username/rest-api",
      demoLink: "https://demo-api.example.com"
    },
    {
      id: 6,
      title: "Machine Learning Model",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Machine Learning", "Python"],
      description: "Predictive analytics solution using advanced machine learning algorithms to deliver accurate forecasts and recommendations.",
      githubLink: "https://github.com/username/ml-model",
      demoLink: "https://demo-ml.example.com"
    },
    {
      id: 7,
      title: "Social Media Platform",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "React"],
      description: "Interactive social networking platform with real-time messaging, user profiles, and content sharing capabilities.",
      githubLink: "https://github.com/username/social-platform",
      demoLink: "https://demo-social.example.com"
    },
    {
      id: 8,
      title: "Mobile Game",
      thumbnail: "/api/placeholder/400/240",
      categories: ["App Development", "Unity"],
      description: "Engaging mobile game with advanced graphics, physics-based gameplay, and cross-platform compatibility.",
      githubLink: "https://github.com/username/mobile-game",
      demoLink: "https://demo-game.example.com"
    },
    {
      id: 9,
      title: "Weather Forecast App",
      thumbnail: "/api/placeholder/400/240",
      categories: ["App Development", "React Native"],
      description: "Real-time weather forecasting application with location-based services and beautiful visualizations of weather data.",
      githubLink: "https://github.com/username/weather-app",
      demoLink: "https://demo-weather.example.com"
    },
    {
      id: 10,
      title: "Blockchain Wallet",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "Blockchain"],
      description: "Secure digital wallet for cryptocurrency transactions with robust security features and intuitive user interface.",
      githubLink: "https://github.com/username/blockchain-wallet",
      demoLink: "https://demo-wallet.example.com"
    },
    {
      id: 11,
      title: "Task Management System",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "Vue.js"],
      description: "Productivity tool for teams to manage tasks, track progress, and collaborate efficiently on projects.",
      githubLink: "https://github.com/username/task-management",
      demoLink: "https://demo-tasks.example.com"
    },
    {
      id: 12,
      title: "Image Recognition API",
      thumbnail: "/api/placeholder/400/240",
      categories: ["API Services", "Python"],
      description: "Advanced image recognition service using machine learning to identify objects, scenes, and patterns in images.",
      githubLink: "https://github.com/username/image-recognition",
      demoLink: "https://demo-recognition.example.com"
    },
    {
      id: 13,
      title: "Virtual Reality Experience",
      thumbnail: "/api/placeholder/400/240",
      categories: ["VR Development", "Unity"],
      description: "Immersive virtual reality experience designed for educational purposes with interactive 3D environments.",
      githubLink: "https://github.com/username/vr-experience",
      demoLink: "https://demo-vr.example.com"
    },
    {
      id: 14,
      title: "AI Chatbot",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Machine Learning", "Python"],
      description: "Intelligent conversational agent powered by natural language processing to provide human-like interactions.",
      githubLink: "https://github.com/username/ai-chatbot",
      demoLink: "https://demo-chatbot.example.com"
    },
    {
      id: 15,
      title: "Portfolio Website",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "React"],
      description: "Personal portfolio website with responsive design, animations, and showcase of professional accomplishments.",
      githubLink: "https://github.com/username/portfolio",
      demoLink: "https://demo-portfolio.example.com"
    },
    {
      id: 16,
      title: "IoT Home Automation",
      thumbnail: "/api/placeholder/400/240",
      categories: ["IoT", "Node.js"],
      description: "Smart home automation system connecting various devices and providing a unified control interface for users.",
      githubLink: "https://github.com/username/home-automation",
      demoLink: "https://demo-iot.example.com"
    },
    {
      id: 17,
      title: "Stock Market Analyzer",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Data Analytics", "Python"],
      description: "Financial tool that analyzes stock market trends and provides insights for investment decision-making.",
      githubLink: "https://github.com/username/stock-analyzer",
      demoLink: "https://demo-stocks.example.com"
    },
    {
      id: 18,
      title: "Music Streaming Service",
      thumbnail: "/api/placeholder/400/240",
      categories: ["Web Development", "React"],
      description: "Online platform for streaming music with personalized recommendations and playlist management features.",
      githubLink: "https://github.com/username/music-stream",
      demoLink: "https://demo-music.example.com"
    }
  ];

  const filterCategories = ['All Projects', 'Web Development', 'App Development', 'API Services', 'Machine Learning', 'Data Analytics', 'VR Development', 'IoT', 'Blockchain'];
  
  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const loadMoreProjects = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  // Reset visible count when filter changes
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setVisibleCount(6); // Reset to show only first 6 when filter changes
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="">
        {/* Header Section with Button Style */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-800 rounded-full px-6 py-2 mb-6 border border-white">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">PROJECTS & PORTFOLIO</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">My Recent Work</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative digital solutions across various technologies and domains.
            Each project demonstrates my commitment to excellence and cutting-edge development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter + visibleCount} // Re-animate when filter or count changes
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 hover:border-purple-500/50"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 inset-x-0 flex flex-wrap gap-2 p-4">
                  {project.categories.map((category, index) => (
                    <span 
                      key={index} 
                      className="bg-black/70 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30 text-purple-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm">{project.description}</p>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex gap-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all px-3 py-1 rounded-full hover:bg-purple-900/30"
                    >
                      <FaGithub size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all px-3 py-1 rounded-full hover:bg-purple-900/30"
                    >
                      <FaExternalLinkAlt size={16} /> 
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Projects Button - Only shown if there are more projects to load */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProjects}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 hover:scale-105"
            >
              <span>View More Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}