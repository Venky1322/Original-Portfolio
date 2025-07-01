import React from 'react';
import { Heart, ArrowUp, Sparkles, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'E-Commerce Platform', href: 'https://github.com/Venky1322/e-commerce' },
        { name: 'Calculater', href: 'https://github.com/Venky1322/calculater' },
        { name: 'Ving', href: '#' },
        { name: 'All Projects', href: 'https://github.com/Venky1322' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/Venky1322' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/venkateswara-rao-viyyauri-9b964226a' },
        { name: 'Email', href: 'mailto:venkateswararaoviyyauri@gmail.com' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                 Venkateswararao Viyyauri
              </h3>
            </div>
            <p className="text-purple-100 mb-8 leading-relaxed text-lg">
              I've completed internships at Codesoft and Coincite.ai, and I’m now diving deeper into full-stack development. I love building real-world projects, exploring UI/UX principles, and collaborating with peers to learn and grow.
            </p>
            <div className="flex items-center space-x-3 text-purple-200">
              <span>Made with</span>
              <Heart size={18} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee size={18} className="text-yellow-400" />
              <span>using</span>
              <Code size={18} className="text-blue-400" />
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-purple-200 text-lg">
              © {currentYear}  Venkateswararao Viyyauri. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8 mt-6 sm:mt-0">
              
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-2xl transition-all duration-300 button-3d shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;