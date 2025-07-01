import React from 'react';
import { MapPin, Calendar, ArrowRight, Building, Trophy, Users, Code } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      title: 'Frontend Intern',
      company: 'Coincite.ai',
      location: 'Remote',
      period: 'May 2024 - July 2024',
      description: 'Worked on UI components and optimized the web experience for a crypto analysis dashboard.',
      achievements: [
        'Created reusable React components with Tailwind CSS',
        'Collaborated with the backend team to integrate APIs',
        'Improved page load speed by 25%'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Git'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    },
    {
      title: 'Web Development Intern',
      company: 'Codesoft',
      location: 'Remote',
      period: 'Feb 2024 - Apr 2024',
      description: 'Built static and dynamic web pages for small business clients.',
      achievements: [
        'Developed responsive pages using HTML, CSS, and JS',
        'Created forms with validation and dynamic interactions',
        'Published live sites using GitHub Pages'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science (Data Science)',
      school: 'NRI Institute of Technology',
      location: 'India',
      period: '2022 - 2026',
      details: 'Pursuing a Bachelor’s degree with focus on Web Development, Data Science, and AI.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const projects = [
  {
    name: 'VING - Your Interview Buddy',
    tech: ['React', 'Tailwind CSS', 'Bolt.new', 'OpenAI API'],
    description: 'An AI-powered English learning assistant that helps users improve their communication skills through voice interaction for interviews.'
  },
  {
    name: 'E-Commerce Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Frontend-only e-commerce UI design with product listings, categories, and responsive layouts.'
  },
  {
    name: 'Landing Page',
    tech: ['HTML', 'CSS'],
    description: 'A clean, animated landing page created for product or portfolio showcase.'
  },
  {
    name: 'Calculator App',
    tech: ['React', 'JavaScript'],
    description: 'A modern calculator built with React supporting keyboard input, custom formulas, and variable input.'
  }
];


  const certifications = [
    { name: 'Infosys Springboard: Angular Basics', color: 'from-orange-500 to-yellow-500' },
    { name: 'Infosys Springboard: Responsive Web Design', color: 'from-blue-500 to-cyan-500' },
    { name: 'OpenCV Bootcamp Certificate', color: 'from-green-500 to-teal-500' }
  ];

  const stats = [
    { icon: <Building className="w-6 h-6" />, label: 'Internships', value: '2', color: 'text-blue-600' },
    { icon: <Trophy className="w-6 h-6" />, label: 'Projects', value: '5+', color: 'text-purple-600' },
    { icon: <Users className="w-6 h-6" />, label: 'Hackathons', value: '3', color: 'text-teal-600' },
    { icon: <Code className="w-6 h-6" />, label: 'Technologies', value: '10+', color: 'text-orange-600' }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-green-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A fresher passionate about building web applications and solving real-world problems with code.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-2xl card-3d hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Internships */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Internships</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 rounded-full"></div>
              {internships.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8 pb-12">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center relative z-10 shadow-lg`}>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 perspective-1000">
                    <div className={`bg-gradient-to-br ${exp.bgGradient} rounded-2xl p-8 card-3d hover:shadow-2xl transition-all duration-300 border border-white/50`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h4 className="text-2xl font-bold text-gray-900">{exp.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full mt-2 lg:mt-0">
                          <Calendar size={14} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center text-lg font-semibold mb-4">
                        <span className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.company}
                        </span>
                        <span className="mx-3 text-gray-400">•</span>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <ArrowRight size={16} className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-white/80 text-gray-800 text-sm rounded-xl font-semibold shadow-sm hover:shadow-md transition-shadow duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="perspective-1000">
                  <div className={`bg-gradient-to-br ${edu.gradient} rounded-2xl p-8 text-white card-3d hover:shadow-2xl transition-all duration-300`}>
                    <h4 className="font-bold text-xl mb-3">{edu.degree}</h4>
                    <div className="text-blue-100 font-semibold text-lg mb-2">{edu.school}</div>
                    <div className="flex items-center text-sm text-blue-200 mb-4">
                      <MapPin size={14} className="mr-2" />
                      {edu.location}
                      <span className="mx-3">•</span>
                      <Calendar size={14} className="mr-2" />
                      {edu.period}
                    </div>
                    <p className="text-blue-100 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="perspective-1000">
                    <div className={`bg-gradient-to-r ${cert.color} rounded-xl p-6 text-white card-3d hover:shadow-xl transition-all duration-300`}>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse"></div>
                        <span className="font-semibold">{cert.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="perspective-1000">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 rounded-2xl p-8 text-white card-3d hover:shadow-2xl transition-all duration-300">
                <h4 className="font-bold text-xl mb-3">Check My Projects</h4>
                {projects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-semibold">{project.name}</span>
                    <p className="text-sm text-purple-100">{project.tech.join(', ')}</p>
                  </div>
                ))}
                <a
                href="\src\venky_resume_drive.pdf"
                download
                className="block text-center w-full mt-6 bg-white text-purple-600 px-6 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 button-3d shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Download Resume
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
