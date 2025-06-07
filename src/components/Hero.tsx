
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Zap, Code, Cpu, CircuitBoard, Microchip } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#00ff88" className="animate-pulse" />
              <path d="M20,0 L20,10 M20,30 L20,40 M0,20 L10,20 M30,20 L40,20" stroke="#00ff88" strokeWidth="0.5" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Current Flow Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 current-flow"
            style={{
              top: `${10 + i * 12}%`,
              left: '-128px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Floating Electronic Components */}
      <div className="absolute top-20 left-10 w-16 h-16 text-cyan-400 floating-component">
        <CircuitBoard className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-20 w-14 h-14 text-green-400 floating-component" style={{animationDelay: '2s'}}>
        <Microchip className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-20 w-12 h-12 text-blue-400 floating-component" style={{animationDelay: '4s'}}>
        <Cpu className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-40 w-18 h-18 text-purple-400 floating-component" style={{animationDelay: '1s'}}>
        <Code className="w-full h-full" />
      </div>

      {/* LED Indicator Dots */}
      <div className="absolute top-32 right-32 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full led-pulse ${
              i === 0 ? 'bg-red-500' : i === 1 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Tech-styled Profile with Oscilloscope Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1 tech-glow border border-cyan-400">
                <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="text-4xl font-bold text-cyan-400 z-10">AM</div>
                  {/* Oscilloscope Wave Background */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                    <path
                      d="M0,50 Q25,30 50,50 T100,50"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-cyan-400 oscilloscope-wave"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center power-indicator">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp stagger-1">
            <span className="text-gray-300">Hi, I'm</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent glitch-text">
              Aditya Mittha
            </span>
          </h1>
          
          <div className="flex justify-center items-center space-x-4 mb-4 animate-fadeInUp stagger-2">
            <CircuitBoard className="w-6 h-6 text-cyan-400 rotate-animation" />
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Electronics Engineer | IoT Developer | Embedded Systems Specialist
            </p>
            <Microchip className="w-6 h-6 text-green-400 rotate-animation" style={{animationDelay: '1s'}} />
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fadeInUp stagger-3 typewriter">
            Crafting innovative solutions with ESP32, Arduino, and cutting-edge IoT technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp stagger-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border border-cyan-400"
            >
              <Zap className="mr-2" size={20} />
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleResumeDownload}
              className="text-lg px-8 py-6 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          {/* Tech-styled Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp stagger-5">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-gray-500/25 border border-gray-600 tech-button"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/adityamittha" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-500 tech-button"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:adityamittha09@gmail.com"
              className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-500/25 border border-red-400 tech-button"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918010542551"
              className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-500/25 border border-green-400 tech-button"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400 mb-8 animate-fadeInUp stagger-5 flex items-center justify-center space-x-4">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>📍 Solapur, Maharashtra</span>
            </span>
            <span>|</span>
            <span>📧 adityamittha09@gmail.com</span>
            <span>|</span>
            <span>📱 +91 8010542551</span>
          </div>
        </div>
        
        {/* Enhanced Tech Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 pulse-button border border-cyan-400"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
