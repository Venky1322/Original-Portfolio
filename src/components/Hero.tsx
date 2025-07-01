import React from 'react';
import Tilt from 'react-parallax-tilt';
import Profile from './assets/ChatGPT Image Jul 1, 2025, 02_53_55 PM.png';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Eye,
  Zap
} from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/Venky1322',
      color: 'hover:text-purple-400',
      bg: 'hover:bg-purple-500/20'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/venkateswara-rao-viyyauri-9b964226a',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/20'
    },
    {
      icon: Mail,
      url: 'mailto:venkateswararaoviyyauri@gmail.com',
      color: 'hover:text-teal-400',
      bg: 'hover:bg-teal-500/20'
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background & Floating Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 animate-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-teal-400 to-green-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* 3D Profile Picture */}
          <div className="flex justify-center mb-6">
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.1}
              transitionSpeed={1000}
              gyroscope={true}
              className="rounded-full"
            >
              <div className="relative w-32 h-32 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
                <div className="w-28 h-28 bg-gradient-to-br from-white/20 to-white/5 rounded-full overflow-hidden flex items-center justify-center backdrop-blur-sm">
                  <img
                    src="ChatGPT Image Jul 1, 2025, 02_53_55 PM.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </Tilt>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient text-shadow-glow">
              Venkateswararao Viyyauri
            </span>
          </h1>

          {/* About Me */}
          <p className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate{' '}
            <span className="text-cyan-300 font-semibold">Frontend Developer</span> and aspiring{' '}
            <span className="text-cyan-300 font-semibold">UI/UX Designer</span> currently pursuing a B.Tech in
            Computer Science. I enjoy building interactive web applications and continuously learning new
            technologies to create impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:via-blue-700 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105 button-3d animate-pulse-glow"
            >
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 group-hover:animate-pulse" />
                <span>View My Work</span>
              </div>
            </button>

            <a
              href="\src\venky_resume_drive.pdf"
              download
              className="group glass-effect text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-white/10 transform hover:-translate-y-2 hover:scale-105 button-3d border-2 border-white/30 hover:border-white/50"
            >
              <div className="flex items-center space-x-3">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map(({ icon: Icon, url, color, bg }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl text-white/70 ${color} ${bg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 button-3d shadow-lg hover:shadow-xl`}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>

          {/* Scroll Down */}
          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="text-white/60 hover:text-white transition-all duration-300 animate-bounce hover:scale-110 p-4 rounded-full hover:bg-white/10"
            >
              <ArrowDown size={36} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
