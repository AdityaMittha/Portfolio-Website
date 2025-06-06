
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Zap, Code, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // You can replace this URL with your actual resume URL once uploaded
    const resumeUrl = "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-500/10 to-red-500/10 animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rotate-45 opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-600 rounded-full opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-40 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-600 rotate-12 opacity-20 floating-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Profile image placeholder with gradient border */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="text-4xl font-bold gradient-text">AM</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fadeInUp stagger-1">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Aditya Mittha
            </span>
          </h1>
          
          <div className="flex justify-center items-center space-x-4 mb-4 animate-fadeInUp stagger-2">
            <Code className="w-6 h-6 text-purple-500" />
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Electronics Engineer | IoT Developer | Innovator in Embedded Tech
            </p>
            <Cpu className="w-6 h-6 text-blue-500" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fadeInUp stagger-3">
            Motivated and detail-oriented Embedded Systems Engineer with a strong foundation in IoT, 
            C/C++ programming, and hardware-software integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp stagger-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Zap className="mr-2" size={20} />
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleResumeDownload}
              className="text-lg px-8 py-6 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp stagger-5">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/adityamittha" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:adityamittha09@gmail.com"
              className="p-3 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918010542551"
              className="p-3 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground mb-8 animate-fadeInUp stagger-5">
            📍 Solapur, Maharashtra | 📧 adityamittha09@gmail.com | 📱 +91 8010542551
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
