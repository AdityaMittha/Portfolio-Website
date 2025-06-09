
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'internships', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`nav-glass transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="container-modern">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
            </div>
            <span className="text-xl font-space font-bold text-gradient-primary">
              Aditya Mittha
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary transition-all duration-300 font-inter font-medium group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-cosmic-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            
            <div className="ml-6 flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden rounded-full w-10 h-10"
              >
                {isDark ? (
                  <Sun size={18} className="transition-transform duration-300 rotate-0 scale-100" />
                ) : (
                  <Moon size={18} className="transition-transform duration-300 rotate-0 scale-100" />
                )}
              </Button>
              
              <Button className="btn-primary text-sm px-6 py-2">
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-foreground transition-all duration-300 hover:scale-105"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="card-glass p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:text-primary transition-all duration-300 font-inter font-medium rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 fade-in-delayed stagger-${index + 1}`}
              >
                {item.label}
              </button>
            ))}
            <Button className="btn-primary w-full mt-4">
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
