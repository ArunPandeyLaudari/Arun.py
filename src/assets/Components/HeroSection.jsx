import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiTailwindcss, SiLaravel, SiFlutter } from 'react-icons/si';

import useGithubRepos from '../Hooks/useFetchRepos'; // Adjusted path to match folder structure

import {
  FaDatabase,
  FaStar,
  FaLayerGroup,
  FaGithub,
  FaLinkedin,
  FaUserTie,
  FaGraduationCap,
  FaFileCode,
  FaBootstrap,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,

  FaFlask,
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlineEye,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineExternalLink
} from 'react-icons/hi';
import {
  FiCode,
  FiBriefcase,
  FiUser,
  FiAward,
  FiArrowRight,
  FiGithub,
} from 'react-icons/fi';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);

  const { repos, loading } = useGithubRepos('ArunPandeyLaudari'); // Replace with your GitHub username

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'experience', icon: FaUserTie, label: 'Experience' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' }
  ];
  const skills = {
    frontend: [
      { icon: FaReact, text: 'ReactJS', color: 'blue' },
      { icon: SiTailwindcss, text: 'TailwindCSS', color: 'purple' },
      { icon: FaBootstrap, text: 'BootStrap', color: 'purple' },
      { icon: FaHtml5, text: 'HTML', color: 'purple' },
      { icon: FaCss3Alt, text: 'CSS', color: 'purple' },
      { icon: FiCode, text: 'UI/UX Design', color: 'purple' },

    ],
    backend: [
      { icon: FaLaravel, text: 'Laravel', color: 'blue' },
      { icon: FiCode, text: 'Django', color: 'blue' },
      { icon: FaFlask, text: 'Flask', color: 'blue' },
      { icon: FiCode, text: 'PHP', color: 'blue' },
      { icon: FaDatabase, text: 'MySQL', color: 'blue' },
      { icon: FaDatabase, text: 'PostgreSQL', color: 'blue' },
      { icon: FaDatabase, text: 'SQLite', color: 'blue' },
      { icon: FiArrowRight, text: 'REST API', color: 'purple' },
    ],
    appDevelopment: [
      { icon: SiFlutter, text: 'Flutter', color: 'blue' },
      { icon: FiCode, text: 'Dart', color: 'blue' },
      { icon: FiArrowRight, text: 'Android Studio', color: 'purple' },
    ],
    dataScience: [
      { icon: FiCode, text: 'Python', color: 'blue' },
      { icon: FiCode, text: 'Anaconda', color: 'blue' },
    ],
    tools: [
      { icon: FiGithub, text: 'GitHub', color: 'purple' },
      { icon: FiArrowRight, text: 'VS Code', color: 'purple' },
    ],
  };

  const experiences = [
    { role: 'Senior Developer', company: 'Tech Solutions Inc', period: '2023–Present' },
    { role: 'App Developer', company: 'App Factory', period: '2021–2023' }
  ];

  const education = [
    { degree: 'BCA – Computer Science', institution: 'University of Technology', period: '2017–2021' }
  ];

  return (
    <div className="relative bg-slate-950 text-white min-h-screen w-full overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-950 to-purple-900/10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>

      <div className="w-full  px-6 lg:px-8 py-12 lg:py-28 relative z-10">
        {/* Main Content - Now with equal width distribution */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full">
          {/* Left Section - Takes exactly half width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 w-full "
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-900/5 w-fit"
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-br from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Flutter & Laravel
              </span>{' '}
              <br className="hidden md:block" />
              Developer
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Crafting seamless cross-platform experiences with Flutter and building secure, scalable backends using Laravel. Let's build something exceptional together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 shadow-lg flex items-center"
              >
                Let's Connect
                <HiOutlineArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-lg hover:bg-slate-700 transition-all hover:border-slate-600"
              >
                <HiOutlineEye size={18} className="mr-2 inline-block" />
                View Resume
              </motion.button>
            </div>

            {/* Tabbed Skills/Experience/Education */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800/60 mt-12 shadow-xl p-6">
              {/* Tabs */}
              <div className="flex justify-between mb-6 p-1 bg-slate-800/50 rounded-lg">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-center flex-1 py-3 px-4 rounded-lg font-medium transition-all ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <tab.icon size={16} className="mr-2" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Content */}
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'skills' && (
                      <div className="space-y-6">
                        {Object.entries(skills).map(([category, skillList]) => (
                          <div
                            key={category}
                            className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-slate-700 pb-4"
                          >
                            {/* Left: Category Name */}
                            <div className="w-full md:w-1/4">
                              <h4 className="text-slate-200 font-semibold text-lg capitalize">
                                {category}
                              </h4>
                            </div>

                            {/* Right: Skill Items */}
                            <div className="w-full md:w-3/4 flex flex-wrap items-center gap-3">
                              {skillList.map(({ icon: Icon, text, color }) => (
                                <motion.div
                                  key={text}
                                  whileHover={{ y: -2 }}
                                  className="flex items-center px-3 py-2 rounded-md bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 transition-all"
                                >
                                  <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-md bg-${color}-500/20 mr-2`}
                                  >
                                    <Icon className={`text-${color}-400`} size={18} />
                                  </div>
                                  <span className="text-sm text-slate-100 font-medium">{text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}


                    {activeTab === 'experience' && (
                      <div className="space-y-4">
                        {experiences.map((exp, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex justify-between items-center bg-slate-800/70 p-4 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/20 mr-4">
                                <FiBriefcase className="text-blue-400" size={20} />
                              </div>
                              <div>
                                <h4 className="font-semibold">{exp.role}</h4>
                                <p className="text-sm text-slate-400">{exp.company}</p>
                              </div>
                            </div>
                            <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-full">{exp.period}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div className="space-y-4">
                        {education.map((edu, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="flex justify-between items-center bg-slate-800/70 p-4 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/20 mr-4">
                                <FaGraduationCap className="text-purple-400" size={20} />
                              </div>
                              <div>
                                <h4 className="font-semibold">{edu.degree}</h4>
                                <p className="text-sm text-slate-400">{edu.institution}</p>
                              </div>
                            </div>
                            <span className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-full">{edu.period}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: FaGithub, label: "GitHub" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: HiOutlineMail, label: "Email" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 px-4 py-2 bg-slate-800/70 rounded-lg hover:bg-slate-700 transition border border-slate-700/50 hover:border-slate-600"
                >
                  <item.icon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Takes exactly half width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-1/2 lg:pl-4"
          >
            <div className="relative p-8 bg-slate-900/70 rounded-2xl border border-slate-700/50 shadow-2xl w-full backdrop-blur-md overflow-hidden">
              {/* Glow Effects */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-lg opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>

              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="w-28 h-4 bg-slate-700 rounded-md"></div>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://github.com/ArunPandeyLaudari.png"
                  alt="Arun Pandey Laudari"
                  className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                />
                <div>
                  <h2 className="text-white font-bold text-xl leading-tight">Arun Pandey Laudari</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Proficient Flutter & Laravel Developer
                  </p>
                </div>
              </div>

              {/* Projects Showcase */}

              {/* Projects Overview */}
              <h3 className="text-slate-300 font-semibold text-lg mb-4">
                <FiGithub className="inline-block text-slate-400" /> Fresh from GitHub
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {loading ? (
                  <p className="text-slate-400 col-span-2 text-center">Loading projects...</p>
                ) : (
                  repos.map((repo, index) => (
                    <motion.div
                      key={repo.id}
                      whileHover={{ y: -5 }}
                      className={`p-5 rounded-xl shadow-lg group transition-all  ${index % 2 === 0
                        ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 hover:border-blue-500/50 shadow-blue-900/10'
                        : 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/50 shadow-purple-900/10'
                        }`}
                    >
                      <h3 className="text-white font-semibold text-xs mb-2 group-hover:text-cyan-400 transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                        {repo.description || 'No description provided.'}
                      </p>
                      <div className="flex justify-between items-center text-xs text-slate-400">
                        <span className="flex items-center space-x-1">
                          <FaStar className="text-yellow-400" size={12} />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center">
                    <FiCode className="text-purple-400" size={14} />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <SiTailwindcss className="text-emerald-400" size={14} />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded-full bg-yellow-500/30 flex items-center justify-center">
                    <SiLaravel className="text-yellow-300" size={14} />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <FaDatabase className="text-blue-400" size={14} />
                  </motion.div>

                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition text-white shadow-lg flex items-center justify-center group"
                >
                  <span className="mr-2 text-sm">Explore</span>
                  <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
}