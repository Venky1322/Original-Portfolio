import React from 'react';
import { ExternalLink, Github, ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'VING - Your Interview Buddy',
      description: 'An AI-powered English learning assistant that helps users improve their communication skills for interviews. Built using Bolt.new and integrated with AI APIs.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'OpenAI API', 'Bolt.new'],
      liveUrl: '#', // Replace with your live project URL
      githubUrl: '#', // Replace with your GitHub repo URL
      featured: true,
      stats: { stars: 45, users: '1.5k+', date: '2025' },
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      title: 'Calculator App',
      description: 'A responsive calculator built using React. Supports keyboard input and custom formulas.',
      image: 'src/Asserts/calc.png',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 12, users: '500+', date: '2024' },
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Landing Page',
      description: 'A modern landing page for a fictional product, featuring animations, responsive design, and a clean UI.',
      image: '/src/Asserts/land.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 18, users: '1k+', date: '2023' },
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      title: 'E-Commerce Website',
      description: 'A frontend e-commerce website with product listing, search, and cart functionality. Built using React and styled with Tailwind CSS.',
      image: 'src/Asserts/e-commerce.jpeg',
      technologies: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 28, users: '2k+', date: '2024' },
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects, skills, and contact information. Fully responsive and visually engaging.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 35, users: '800+', date: '2025' },
      gradient: 'from-pink-500 to-yellow-500'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group perspective-1000">
              <div className="glass-effect rounded-3xl overflow-hidden card-3d hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30`}></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                      {project.stats.date}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.liveUrl} className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white">Other Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="glass-effect rounded-2xl overflow-hidden border border-white/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-white/10 text-white rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.liveUrl} className="text-purple-400 hover:text-purple-300 transition">
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.githubUrl} className="text-gray-400 hover:text-gray-300 transition">
                        <Github size={16} />
                      </a>
                    </div>
                    <ArrowRight size={16} className="text-gray-500 group-hover:text-purple-400 transition" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Venky1322"
            target="_blank"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
