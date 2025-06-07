import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Zap, Code, Cpu, CircuitBoard, Microchip } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = ['Electronics Engineer', 'IoT Developer', 'Embedded Systems Specialist', 'Hardware Designer'];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const typeText = () => {
      const text = texts[textIndex];
      let index = 0;
      setCurrentText('');
      
      const typing = setInterval(() => {
        setCurrentText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(typing);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(typing);
    };
    
    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [textIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 border-2 border-blue-500 rounded-full mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />
      
      {/* Cursor Trail */}
      <div 
        className="fixed pointer-events-none z-40 w-2 h-2 bg-blue-400 rounded-full mix-blend-difference transition-all duration-500 ease-out opacity-60"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <svg className="w-full h-full animated-circuit" viewBox="0 0 800 600" fill="none">
          <defs>
            <pattern id="circuit-advanced" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-500 animate-pulse-slow" />
              <path d="M50,0 L50,25 M50,75 L50,100 M0,50 L25,50 M75,50 L100,50" stroke="currentColor" strokeWidth="1" className="text-blue-400" opacity="0.6" />
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500" opacity="0.4" />
            </pattern>
            <linearGradient id="data-flow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5">
                <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-advanced)" />
          <path d="M0,300 Q200,250 400,300 T800,300" stroke="url(#data-flow)" strokeWidth="2" fill="none" opacity="0.7" />
        </svg>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 text-blue-400 opacity-30 floating-tech">
        <CircuitBoard className="w-full h-full animate-spin-slow" />
      </div>
      <div className="absolute top-40 right-32 w-12 h-12 text-indigo-500 opacity-25 floating-tech-reverse">
        <Microchip className="w-full h-full animate-bounce-slow" />
      </div>
      <div className="absolute bottom-40 left-32 w-14 h-14 text-purple-500 opacity-20 floating-tech">
        <Cpu className="w-full h-full animate-pulse-slow" />
      </div>
      <div className="absolute bottom-20 right-20 w-10 h-10 text-cyan-500 opacity-30 floating-tech-reverse">
        <Zap className="w-full h-full animate-ping-slow" />
      </div>

      {/* Main Content Container - Better Centered with Lower Positioning */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-12 pt-20"
             style={{ 
               transform: `translateY(${scrollY * -0.1}px)`,
               opacity: Math.max(0, 1 - scrollY * 0.002)
             }}>
          
          {/* Animated Name with Glitch Effect - Moved Higher */}
          <div className="space-y-6">
            <div className="text-xl text-gray-600 dark:text-gray-400 font-sans tracking-wider animate-fade-in-up">
              <span className="typewriter">Hello World! I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 dark:text-white glitch-text">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Aditya Mittha
              </span>
            </h1>
            
            {/* Typing Animation for Role */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-sans">
                <span className="typing-text">{currentText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Professional Avatar with Glow Effect - Positioned Lower */}
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-2 shadow-2xl hover-glow">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-sans font-bold text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text z-10">AM</div>
                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
              <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed animate-fade-in-up-delay font-light">
            Passionate about creating innovative embedded solutions with 
            <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"> ESP32</span>, 
            <span className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"> Arduino</span>, and 
            <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"> cutting-edge IoT technologies</span>. 
            Currently pursuing B.Tech in Electronics & Telecommunication Engineering.
          </p>

          {/* Action Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg" 
              className="group text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-white border-0 font-semibold tracking-wide"
            >
              <Code className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload} 
              className="group text-lg px-10 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold tracking-wide"
            >
              <Download className="mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
              Download Resume
            </Button>
          </div>

          {/* Social Links with Enhanced Animations */}
          <div className="flex justify-center space-x-6 pt-6">
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: Linkedin, href: "https://linkedin.com/in/adityamittha", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:adityamittha09@gmail.com", color: "hover:text-red-500" },
              { icon: Phone, href: "tel:+918010542551", color: "hover:text-green-500" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-current`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <social.icon size={28} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 w-full max-w-4xl">
            {[
              { icon: "📍", text: "Solapur, Maharashtra", color: "bg-blue-500" },
              { icon: "📧", text: "adityamittha09@gmail.com", color: "bg-green-500" },
              { icon: "📱", text: "+91 8010542551", color: "bg-purple-500" }
            ].map((contact, index) => (
              <div 
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-3 h-3 ${contact.color} rounded-full animate-pulse`}></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{contact.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
