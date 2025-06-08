
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Cpu, Cloud, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-azure-500 to-azure-600",
      skills: [
        { 
          name: "C/C++", 
          level: 90, 
          color: "from-azure-400 to-azure-600",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
        },
        { 
          name: "Embedded C", 
          level: 85, 
          color: "from-mint-400 to-mint-600",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
        },
        { 
          name: "Python", 
          level: 80, 
          color: "from-azure-500 to-mint-500",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
      ]
    },
    {
      title: "Hardware & Boards",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-mint-500 to-azure-600",
      skills: [
        { 
          name: "ESP32", 
          level: 95, 
          color: "from-azure-400 to-azure-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Arduino", 
          level: 90, 
          color: "from-mint-400 to-azure-500",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Raspberry Pi", 
          level: 80, 
          color: "from-mint-500 to-mint-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
        { 
          name: "PCB Design", 
          level: 75, 
          color: "from-azure-500 to-azure-600",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-azure-600 to-mint-500",
      skills: [
        { 
          name: "Arduino IDE", 
          level: 95, 
          color: "from-azure-400 to-mint-500",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Proteus", 
          level: 85, 
          color: "from-mint-400 to-azure-500",
          logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Wokwi", 
          level: 90, 
          color: "from-azure-500 to-azure-600",
          logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Firebase", 
          level: 80, 
          color: "from-mint-500 to-azure-500",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
      ]
    },
    {
      title: "IoT & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-mint-400 to-azure-500",
      skills: [
        { 
          name: "Blynk IoT", 
          level: 85, 
          color: "from-mint-400 to-mint-600",
          logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Ubidots", 
          level: 80, 
          color: "from-azure-400 to-azure-600",
          logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "AWS IoT", 
          level: 75, 
          color: "from-azure-500 to-mint-500",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        { 
          name: "MQTT", 
          level: 80, 
          color: "from-mint-500 to-azure-600",
          logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=50&h=50&fit=crop&crop=center"
        },
      ]
    },
    {
      title: "Core Technologies",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-azure-500 to-mint-400",
      skills: [
        { 
          name: "IoT Systems", 
          level: 90, 
          color: "from-azure-400 to-mint-500",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Embedded Systems", 
          level: 88, 
          color: "from-mint-400 to-azure-500",
          logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "VLSI", 
          level: 75, 
          color: "from-azure-500 to-azure-600",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Digital Circuits", 
          level: 85, 
          color: "from-mint-500 to-mint-600",
          logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=50&h=50&fit=crop&crop=center"
        },
      ]
    }
  ];

  // Large floating logos for background decoration with sophisticated positioning
  const floatingLogos = [
    { 
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", 
      position: "top-20 left-10", 
      animation: "floating-tech-elegant",
      size: "w-20 h-20"
    },
    { 
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", 
      position: "top-32 right-16", 
      animation: "floating-tech-gentle",
      size: "w-16 h-16"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", 
      position: "bottom-20 left-20", 
      animation: "floating-tech-elegant",
      size: "w-24 h-24"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
      position: "bottom-32 right-10", 
      animation: "floating-tech-gentle",
      size: "w-18 h-18"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
      position: "top-1/2 left-5", 
      animation: "floating-tech-elegant",
      size: "w-14 h-14"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", 
      position: "top-1/3 right-5", 
      animation: "floating-tech-gentle",
      size: "w-22 h-22"
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-bg-professional relative overflow-hidden">
      {/* Sophisticated Background Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingLogos.map((item, index) => (
          <div 
            key={index}
            className={`absolute ${item.position} ${item.animation} opacity-5 dark:opacity-3 elegant-float`}
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            <img 
              src={item.logo} 
              alt={`Floating tech logo ${index}`}
              className={`${item.size} object-contain filter grayscale subtle-glow`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-azure-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-mint-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-cool-gray-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-jakarta text-foreground mb-4 text-fade-in">
            Skills & 
            <span className="gradient-text-primary ml-2">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-cool-gray-500 dark:text-cool-gray-400 max-w-2xl mx-auto font-inter text-slide-up">
            Expertise in embedded systems, IoT development, and hardware-software integration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`p-6 card-professional morphing-border shimmer-effect stagger-${categoryIndex + 1}`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-4 mx-auto subtle-glow`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold font-jakarta text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-sm font-medium text-foreground font-inter">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-bold transition-all duration-300 font-jakarta ${
                        hoveredSkill === `${categoryIndex}-${skillIndex}` 
                          ? 'text-azure-600 scale-110' 
                          : 'text-cool-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-cool-gray-200 dark:bg-cool-gray-700 skill-bar-modern" 
                      />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out skill-bar-fill-modern`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
