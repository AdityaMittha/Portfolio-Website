import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Zap, Code, Cpu, CircuitBoard, Microchip } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
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
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
      {/* Subtle Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-blue-600" />
              <path d="M40,0 L40,20 M40,60 L40,80 M0,40 L20,40 M60,40 L80,40" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Subtle Animated Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 text-blue-400 opacity-20 floating-component">
        <CircuitBoard className="w-full h-full" />
      </div>
      <div className="absolute top-32 right-20 w-10 h-10 text-indigo-500 opacity-20 floating-component" style={{
      animationDelay: '2s'
    }}>
        <Microchip className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-20 w-8 h-8 text-slate-500 opacity-20 floating-component" style={{
      animationDelay: '4s'
    }}>
        <Cpu className="w-full h-full" />
      </div>

      {/* Professional Status Indicator */}
      <div className="absolute top-8 right-8 flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for Opportunities</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Professional Profile Picture */}
          <div className="mb-8 flex justify-center my-[75px]">
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text z-10">AM</div>
                  {/* Subtle Tech Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-blue-500" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tech-pattern)" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp stagger-1">
            <span className="text-gray-600 dark:text-gray-400 font-normal">Hello, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Aditya Mittha
            </span>
          </h1>
          
          <div className="flex justify-center items-center space-x-3 mb-6 animate-fadeInUp stagger-2">
            <div className="w-6 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Electronics Engineer & IoT Developer
            </p>
            <div className="w-6 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-fadeInUp stagger-3 leading-relaxed">
            Passionate about creating innovative embedded solutions with ESP32, Arduino, and cutting-edge IoT technologies. 
            Currently pursuing B.Tech in Electronics & Telecommunication Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp stagger-4">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0">
              <Code className="mr-2" size={20} />
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={handleResumeDownload} className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-900 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          {/* Professional Social Links */}
          <div className="flex justify-center space-x-4 mb-12 animate-fadeInUp stagger-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/adityamittha" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white dark:bg-gray-800 text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
              <Linkedin size={24} />
            </a>
            <a href="mailto:adityamittha09@gmail.com" className="p-4 rounded-xl bg-white dark:bg-gray-800 text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
              <Mail size={24} />
            </a>
            <a href="tel:+918010542551" className="p-4 rounded-xl bg-white dark:bg-gray-800 text-green-500 hover:text-green-600 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700">
              <Phone size={24} />
            </a>
          </div>
          
          {/* Professional Contact Information */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fadeInUp stagger-5 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>📍 Solapur, Maharashtra</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>📧 adityamittha09@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>📱 +91 8010542551</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;