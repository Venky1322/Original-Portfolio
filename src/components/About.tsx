import React, { useEffect, useRef } from 'react';
import { Code, Palette, Zap, Users, Award, Target, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'Python', level: 70, color: 'from-yellow-500 to-orange-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-pink-500 to-rose-500' },
    { name: 'SQL', level: 65, color: 'from-indigo-500 to-purple-500' }
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Focused on building responsive, interactive web apps using modern JavaScript frameworks.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Enthusiast',
      description: 'Designing intuitive interfaces with a strong emphasis on user experience and accessibility.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Learner',
      description: 'Always exploring new tools and frameworks to stay ahead in the tech world.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Enjoy working in teams, sharing ideas, and growing together through peer feedback.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: '10+ Mini Projects Built', color: 'text-purple-600' },
    { icon: <Target className="w-6 h-6" />, text: '2+ Internships Completed', color: 'text-blue-600' },
    { icon: <Lightbulb className="w-6 h-6" />, text: '10+ Technologies Explored', color: 'text-teal-600' },
    { icon: <Rocket className="w-6 h-6" />, text: 'Actively Learning Full-Stack', color: 'text-orange-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              bar.classList.add('animate-skill-bar');
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a B.Tech Computer Science (Data Science) student passionate about frontend and full-stack development.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-2xl card-3d hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg mb-4 ${achievement.color}`}>
                {achievement.icon}
              </div>
              <p className="font-bold text-gray-800 text-lg">{achievement.text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="perspective-1000">
              <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100 rounded-3xl p-8 card-3d hover:shadow-2xl transition-all duration-500">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="text-center z-10">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">VV</span>
                    </div>
                    <p className="text-white/80 font-semibold">Frontend Developer</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="space-y-6 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <div
                        className={`skill-bar h-4 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                        style={{ '--skill-width': `${skill.level}%` } as React.CSSProperties}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Intro */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <p className="text-lg leading-relaxed mb-6">
                I'm Venkateswararao Viyyauri, a B.Tech CSE (Data Science) student. I began my journey with Python and quickly found a passion for frontend development using React.
              </p>
              <p className="text-lg leading-relaxed">
                I've completed internships at Codesoft and Coincite.ai, and I’m now diving deeper into full-stack development. I love building real-world projects, exploring UI/UX principles, and collaborating with peers to learn and grow.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${highlight.bgColor} p-8 rounded-2xl card-3d hover:shadow-2xl transition-all duration-300 border border-white/50`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${highlight.color} text-white mb-4 shadow-lg`}>
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">{highlight.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
