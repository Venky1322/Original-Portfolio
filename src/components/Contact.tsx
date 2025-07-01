import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Clock
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mgvydrzk');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'venkateswararaoviyyauri@email.com',
      href: 'mailto:venkateswararaoviyyauri@email.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8985778737',
      href: 'tel:+918985778737',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Nuzvid, India',
      href: 'https://maps.app.goo.gl/dD13NqJdauN3oHej8',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  const responseInfo = [
    { icon: <Mail className="w-5 h-5" />, type: 'Email', time: 'Within 24 hours', color: 'text-green-600' },
    { icon: <MessageCircle className="w-5 h-5" />, type: 'Project Inquiry', time: '1-2 business days', color: 'text-blue-600' },
    { icon: <Phone className="w-5 h-5" />, type: 'Phone', time: 'Same day', color: 'text-orange-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="perspective-1000">
            <div className="glass-effect rounded-3xl p-8 card-3d hover:shadow-2xl transition-all duration-300 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="w-8 h-8 mr-3 text-purple-400" />
                Send Message
              </h3>

              {state.succeeded ? (
                <p className="text-green-300 text-lg font-semibold">Thanks for reaching out! I’ll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-purple-200 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-purple-200 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-purple-200 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-purple-200 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 button-3d shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                  >
                    <Send size={20} />
                    <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="perspective-1000">
              <div className="glass-effect rounded-3xl p-8 card-3d hover:shadow-2xl transition-all duration-300 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group button-3d"
                    >
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-purple-200 font-semibold mb-1">{item.label}</p>
                        <p className="text-white font-bold text-lg">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="perspective-1000">
              <div className="glass-effect rounded-3xl p-8 card-3d hover:shadow-2xl transition-all duration-300 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-purple-400" />
                  Response Time
                </h3>
                <div className="space-y-4">
                  {responseInfo.map((info, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center space-x-3">
                        <div className={`${info.color}`}>
                          {info.icon}
                        </div>
                        <span className="text-purple-100 font-medium">{info.type}</span>
                      </div>
                      <span className={`${info.color} font-bold`}>{info.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
