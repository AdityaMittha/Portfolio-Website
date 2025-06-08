
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg-professional">
      {/* Sophisticated cursor effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 border-2 border-azure-500 rounded-full mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />
      
      {/* Elegant cursor trail */}
      <div 
        className="fixed pointer-events-none z-40 w-2 h-2 bg-azure-400 rounded-full mix-blend-difference transition-all duration-500 ease-out opacity-60"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Advanced circuit board background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <defs>
            <pattern id="circuit-professional" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-azure-500 subtle-glow" />
              <path d="M50,0 L50,25 M50,75 L50,100 M0,50 L25,50 M75,50 L100,50" stroke="currentColor" strokeWidth="1" className="text-azure-400" opacity="0.6" />
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-mint-500" opacity="0.4" />
            </pattern>
            <linearGradient id="data-flow-professional" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--azure-500))" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="hsl(var(--mint-500))" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="hsl(var(--azure-600))" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-professional)" />
          <path d="M0,300 Q200,250 400,300 T800,300" stroke="url(#data-flow-professional)" strokeWidth="2" fill="none" opacity="0.7" />
        </svg>
      </div>

      {/* Floating tech elements with sophisticated animations */}
      <div className="absolute top-20 left-20 w-16 h-16 text-azure-400 opacity-20 floating-tech-elegant">
        <CircuitBoard className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-32 w-12 h-12 text-mint-500 opacity-15 floating-tech-gentle">
        <Microchip className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-32 w-14 h-14 text-azure-500 opacity-18 floating-tech-elegant">
        <Cpu className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-20 w-10 h-10 text-mint-400 opacity-25 floating-tech-gentle">
        <Zap className="w-full h-full" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-12 pt-20"
             style={{ 
               transform: `translateY(${scrollY * -0.1}px)`,
               opacity: Math.max(0, 1 - scrollY * 0.002)
             }}>
          
          {/* Enhanced name with professional typography */}
          <div className="space-y-6">
            <div className="text-xl text-cool-gray-500 dark:text-cool-gray-400 font-inter tracking-wider text-fade-in">
              <span className="typewriter">Hello World! I'm</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-jakarta font-bold text-cool-gray-800 dark:text-cool-gray-100 text-slide-up">
              <span className="gradient-text-primary">
                Aditya Mittha
              </span>
            </h1>
            
            {/* Enhanced typing animation for role */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-cool-gray-600 dark:text-cool-gray-300 font-inter font-medium">
                <span className="text-azure-600 font-semibold">{currentText}</span>
                <span className="animate-pulse text-azure-500">|</span>
              </p>
            </div>
          </div>

          {/* Professional avatar with sophisticated glow */}
          <div className="relative group">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-azure-600 via-azure-500 to-mint-500 p-2 shadow-2xl subtle-glow professional-hover">
              <div className="w-full h-full rounded-xl glass-effect flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-jakarta font-bold gradient-text-primary z-10">AM</div>
                {/* Sophisticated overlay */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-azure-500/20 to-mint-500/20 shimmer-effect"></div>
                </div>
              </div>
            </div>
            {/* Enhanced status indicator */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-mint-500 rounded-full flex items-center justify-center shadow-lg elegant-float">
              <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Refined description */}
          <p className="text-lg sm:text-xl text-cool-gray-600 dark:text-cool-gray-400 max-w-4xl leading-relaxed text-fade-in font-inter">
            Passionate about creating innovative embedded solutions with 
            <span className="text-azure-600 font-semibold hover:text-azure-700 transition-colors"> ESP32</span>, 
            <span className="text-mint-600 font-semibold hover:text-mint-700 transition-colors"> Arduino</span>, and 
            <span className="text-azure-500 font-semibold hover:text-azure-600 transition-colors"> cutting-edge IoT technologies</span>. 
            Currently pursuing B.Tech in Electronics & Telecommunication Engineering.
          </p>

          {/* Professional action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg" 
              className="btn-professional text-lg text-white border-0 font-jakarta font-semibold tracking-wide shadow-xl hover:shadow-2xl"
            >
              <Code className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleResumeDownload} 
              className="group text-lg px-10 py-4 border-2 border-azure-500 text-azure-600 hover:bg-azure-500 hover:text-white transform hover:scale-105 transition-all duration-300 glass-effect font-jakarta font-semibold tracking-wide"
            >
              <Download className="mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
              Download Resume
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-6 pt-6">
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-cool-gray-800 dark:hover:text-cool-gray-200" },
              { icon: Linkedin, href: "https://linkedin.com/in/adityamittha", color: "hover:text-azure-600" },
              { icon: Mail, href: "mailto:adityamittha09@gmail.com", color: "hover:text-mint-600" },
              { icon: Phone, href: "tel:+918010542551", color: "hover:text-azure-500" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-4 rounded-xl glass-effect text-cool-gray-600 dark:text-cool-gray-300 ${social.color} professional-hover shadow-lg border border-cool-gray-200 dark:border-cool-gray-700 hover:border-current stagger-${index + 1}`}
              >
                <social.icon size={28} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>

          {/* Professional contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 w-full max-w-4xl">
            {[
              { icon: "📍", text: "Solapur, Maharashtra", color: "bg-azure-500" },
              { icon: "📧", text: "adityamittha09@gmail.com", color: "bg-mint-500" },
              { icon: "📱", text: "+91 8010542551", color: "bg-azure-600" }
            ].map((contact, index) => (
              <div 
                key={index}
                className={`glass-effect rounded-xl p-4 border border-cool-gray-200 dark:border-cool-gray-700 professional-hover stagger-${index + 1}`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-3 h-3 ${contact.color} rounded-full animate-pulse`}></div>
                  <span className="text-sm font-inter font-medium text-cool-gray-700 dark:text-cool-gray-300">{contact.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 elegant-float">
            <div className="w-6 h-10 border-2 border-cool-gray-400 dark:border-cool-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-azure-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
