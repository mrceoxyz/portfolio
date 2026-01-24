'use client'

import { Mail, Phone, Linkedin, Github, MapPin, Code, Cpu, Zap, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import cto from './img/cto.jpg'
import { fadeUp } from './lib/motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      title: 'Embedded System Engineer',
      company: 'IMSAUZA NIG LTD',
      location: 'Kano, Nigeria',
      period: '01/2021 - 12/2024',
      highlights: [
        'Evaluated risks to engineering operations and implemented mitigation measures',
        'Managed engineering resources through strategic planning and monitoring',
        'Designed circuitry and components using advanced modeling software',
        'Improved electronic designs through application of engineering principles'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Right Click IT, Limited',
      location: 'Abuja, Nigeria',
      period: '04/2022 - 07/2023',
      highlights: [
        'Delivered projects remotely with consistent achievement of targets',
        'Automated functionality through system testing and validation',
        'Assessed data to plan installation of new systems',
        'Communicated technical requirements for optimal performance'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Nail Technologies Software Company',
      location: 'Kano, Nigeria',
      period: '01/2019 - 01/2020',
      highlights: [
        'Built reusable code to minimize costs and enhance efficiency',
        'Collaborated on back-end development and API integration',
        'Designed layout and graphics to enhance website aesthetics',
        'Conducted cross-browser testing to ensure quality'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Hmax Technologies Software Company',
      location: 'Kano, Nigeria',
      period: '01/2017 - 01/2019',
      highlights: [
        'Maintained updated software in line with changing coding standards',
        'Supported code review, system integration and validation',
        'Integrated third-party applications to enhance features',
        'Evaluated project requirements and proposed data-driven alternatives'
      ]
    },
    {
      title: 'Electrical Technician',
      company: 'Dangote Cement Factory Obajana',
      location: 'Kogi State, Nigeria',
      period: '10/2014 - 04/2016',
      highlights: [
        'Improved electrical installations through standardized procedures',
        'Conducted safety inspections of electrical equipment',
        'Repaired and maintained electrical systems for optimal reliability',
        'Used diagnostic tools to identify and resolve electrical issues'
      ]
    }
  ];

  const skills = {
    electrical: [
      'Circuit Design (Analogue & Digital)',
      'Power Electronics',
      'Power System Design',
      'High Voltage (HV) & Low Voltage (LV)',
      'Schematic Drawings',
      'Performance Analysis'
    ],
    software: [
      'Python',
      'PHP',
      'TypeScript',
      'C',
      'React',
      'MySQL',
      'PostgreSQL',
      'GIT'
    ],
    management: [
      'Project Management',
      'Project Delivery',
      'Schedule Development',
      'Website Troubleshooting'
    ]
  };

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and PHP backend, featuring payment integration and inventory management.',
      technologies: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/alieyuib/ecommerce-platform',
      stars: 24,
      forks: 8
    },
    {
      name: 'IoT Power Monitoring System',
      description: 'Embedded system for real-time power consumption monitoring with web dashboard for data visualization and analytics.',
      technologies: ['C', 'Python', 'React', 'PostgreSQL'],
      github: 'https://github.com/alieyuib/power-monitor',
      stars: 15,
      forks: 5
    },
    {
      name: 'Circuit Design Toolkit',
      description: 'Web-based toolkit for electrical engineers to calculate circuit parameters and generate schematic diagrams.',
      technologies: ['TypeScript', 'React', 'Canvas API'],
      github: 'https://github.com/alieyuib/circuit-toolkit',
      stars: 32,
      forks: 12
    },
    {
      name: 'Automation Control Panel',
      description: 'Industrial automation control interface for monitoring and managing automated production systems.',
      technologies: ['Python', 'React', 'WebSocket'],
      github: 'https://github.com/alieyuib/automation-panel',
      stars: 18,
      forks: 6
    }
  ];

//   const heroImages = [
//     "/hero/hero-1.jpg",
//     "/hero/hero-2.jpg",
//     "/hero/hero-3.jpg",
//   ];

//   const HeroBackground = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(
//       () => setIndex((i) => (i + 1) % heroImages.length),
//       6000
//     );
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={heroImages[index]}
//             alt="Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

  const Card = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="
        rounded-2xl
        bg-linear-to-br from-slate-800/70 to-slate-900/70
        border border-white/10
        shadow-lg
        hover:shadow-blue-500/10
        transition
      "
    >
      {children}
    </motion.div>
  );
  


  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
        style={{
          transform: scrolled ? 'translateY(0)' : 'translateY(0)',
          opacity: 1
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{
                animation: 'fadeIn 0.5s ease-out'
              }}
            >
              AIU
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                  style={{
                    animation: `fadeIn 0.5s ease-out ${item.id}s both`
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden transition-transform duration-300"
              style={{
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 hover:bg-slate-800 rounded transition-colors"
                  style={{
                    animation: isMenuOpen ? `slideIn 0.3s ease-out ${item.id}s both` : 'none'
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      {/* <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-wide">
            <span className="text-blue-400">AI</span>U
          </span>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400 rounded" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav> */}


      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center mt-10">
          <div className="inline-block">
            <div className="mx-auto mb-6">
              <div className="w-32 h-32 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
                 <Image
                  src={cto}
                  alt="Aliyu Ibrahim Umar"
                  width={140}
                  height={140}
                  className="rounded-full border-4 border-blue-500/30 shadow-xl mx-auto"
                />
              </div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
            Aliyu Ibrahim Umar
          </h1>
          <p className="text-lg sm:text-xl text-blue-400 mb-6 mt-2">
            Software & Electrical Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Bridging hardware and software domains with expertise in full-stack development and power systems engineering
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors"
            >
              View Work
            </button>
          </div>
          <button onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              className="
                rounded-2xl p-6
                bg-linear-to-br from-slate-800/70 to-slate-900/70
                border border-white/10
                shadow-lg
                hover:shadow-blue-500/10
                transition
              ">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-400">Full-stack expertise with React, Python, PHP, and modern web technologies</p>
            </div>
            <div
                className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Embedded Systems</h3>
              <p className="text-gray-400">Circuit design, electronic components, and system integration</p>
            </div>
            <div
                className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
              <p className="text-gray-400">Power systems, HV/LV engineering, and performance analysis</p>
            </div>
          </div>
          <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
            <p className="text-gray-300 leading-relaxed text-lg">
              Versatile Software and Electrical Engineer with expertise spanning full-stack development and power systems engineering. 
              Proven ability to bridge hardware and software domains, delivering integrated solutions from circuit design to web applications. 
              Skilled in electrical system design, power electronics, and modern software development with React, Python, and PHP. 
              Strong project management capabilities with a track record of delivering complex technical projects on schedule.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                  <p className="text-gray-400">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing the integration of electrical engineering and software development expertise
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <div className="flex items-center gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900/50 text-cyan-400 text-sm rounded-full border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://github.com/alieyuib" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <div className="text-blue-400 text-4xl font-bold mb-2">2021</div>
              <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering</h3>
              <p className="text-gray-300 mb-2">Electrical Engineering</p>
              <p className="text-gray-400">Kano University of Science and Technology Wudil</p>
              <p className="text-sm text-gray-500 mt-4">Specialization: Automation, Control, Electronics</p>
            </div>
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <div className="text-cyan-400 text-4xl font-bold mb-2">2017</div>
              <h3 className="text-xl font-semibold mb-2">Higher National Diploma</h3>
              <p className="text-gray-300 mb-2">Web Design and Development</p>
              <p className="text-gray-400">RANDATECH Systems Limited</p>
            </div>
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <div className="text-purple-400 text-4xl font-bold mb-2">2014</div>
              <h3 className="text-xl font-semibold mb-2">GCSE</h3>
              <p className="text-gray-300 mb-2">Radio, Television & Electronics</p>
              <p className="text-gray-400">Government Technical College</p>
            </div>
          </div>
          <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                  mt-10
                ">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <p className="text-gray-300">Junior Technician Scheme in Instrumentation & Automation - Dangote Academy, 2016</p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Electrical Engineering</h3>
              <div className="space-y-3">
                {skills.electrical.map((skill, i) => (
                  <div key={i} className="bg-slate-900/50 px-4 py-2 rounded-lg text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Software Development</h3>
              <div className="space-y-3">
                {skills.software.map((skill, i) => (
                  <div key={i} className="bg-slate-900/50 px-4 py-2 rounded-lg text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Project Management</h3>
              <div className="space-y-3">
                {skills.management.map((skill, i) => (
                  <div key={i} className="bg-slate-900/50 px-4 py-2 rounded-lg text-gray-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:Alieyuib@gmail.com" className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-300 text-sm mt-1 break-all">Alieyuib@gmail.com</p>
            </a>
            <a href="tel:+2348025589982" className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-gray-300 text-sm mt-1">+234 802 558 9982</p>
            </a>
            <a href="https://linkedin.com/in/aliyu-ibrahim-512b36137/" target="_blank" rel="noopener noreferrer" className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Linkedin className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-gray-300 text-sm mt-1 flex items-center justify-center">
                Profile <ExternalLink className="w-3 h-3 ml-1" />
              </p>
            </a>
            <a href="https://github.com/alieyuib" target="_blank" rel="noopener noreferrer" className="
                  rounded-2xl p-6
                  bg-linear-to-br from-slate-800/70 to-slate-900/70
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                ">
              <Github className="w-8 h-8 mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-300 text-sm mt-1 flex items-center justify-center">
                @alieyuib <ExternalLink className="w-3 h-3 ml-1" />
              </p>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center text-gray-400">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Kano, Nigeria</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 text-center text-gray-400">
        <p>&copy; 2025 Aliyu Ibrahim Umar. All rights reserved.</p>
        {/* <p className="mt-2 text-sm">Built with React, TypeScript & Tailwind CSS</p> */}
      </footer>
    </div>
  );
};

export default Portfolio;