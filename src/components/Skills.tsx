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
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { 
          name: "C/C++", 
          level: 90, 
          color: "from-blue-400 to-blue-600",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
        },
        { 
          name: "Embedded C", 
          level: 85, 
          color: "from-green-400 to-green-600",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
        },
        { 
          name: "Python", 
          level: 80, 
          color: "from-yellow-400 to-orange-600",
          logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        },
      ]
    },
    {
      title: "Hardware & Boards",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600",
      skills: [
        { 
          name: "ESP32", 
          level: 95, 
          color: "from-red-400 to-red-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Arduino", 
          level: 90, 
          color: "from-blue-400 to-blue-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Raspberry Pi", 
          level: 80, 
          color: "from-green-400 to-green-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
        },
        { 
          name: "PCB Design", 
          level: 75, 
          color: "from-purple-400 to-purple-600",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { 
          name: "Arduino IDE", 
          level: 95, 
          color: "from-cyan-400 to-cyan-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
        },
        { 
          name: "Proteus", 
          level: 85, 
          color: "from-orange-400 to-orange-600",
          logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Wokwi", 
          level: 90, 
          color: "from-indigo-400 to-indigo-600",
          logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Firebase", 
          level: 80, 
          color: "from-yellow-400 to-yellow-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
      ]
    },
    {
      title: "IoT & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { 
          name: "Blynk IoT", 
          level: 85, 
          color: "from-green-400 to-green-600",
          logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Ubidots", 
          level: 80, 
          color: "from-blue-400 to-blue-600",
          logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "AWS IoT", 
          level: 75, 
          color: "from-orange-400 to-orange-600",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        },
        { 
          name: "MQTT", 
          level: 80, 
          color: "from-purple-400 to-purple-600",
          logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=50&h=50&fit=crop&crop=center"
        },
      ]
    },
    {
      title: "Core Technologies",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      skills: [
        { 
          name: "IoT Systems", 
          level: 90, 
          color: "from-pink-400 to-pink-600",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Embedded Systems", 
          level: 88, 
          color: "from-teal-400 to-teal-600",
          logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "VLSI", 
          level: 75, 
          color: "from-indigo-400 to-indigo-600",
          logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=50&h=50&fit=crop&crop=center"
        },
        { 
          name: "Digital Circuits", 
          level: 85, 
          color: "from-red-400 to-red-600",
          logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=50&h=50&fit=crop&crop=center"
        },
      ]
    }
  ];

  // Large floating logos for background decoration
  const floatingLogos = [
    { 
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", 
      position: "top-20 left-10", 
      animation: "floating-tech",
      size: "w-20 h-20"
    },
    { 
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", 
      position: "top-32 right-16", 
      animation: "floating-tech-reverse",
      size: "w-16 h-16"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", 
      position: "bottom-20 left-20", 
      animation: "floating-tech",
      size: "w-24 h-24"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg", 
      position: "bottom-32 right-10", 
      animation: "floating-tech-reverse",
      size: "w-18 h-18"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
      position: "top-1/2 left-5", 
      animation: "floating-tech",
      size: "w-14 h-14"
    },
    { 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", 
      position: "top-1/3 right-5", 
      animation: "floating-tech-reverse",
      size: "w-22 h-22"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Floating Background Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingLogos.map((item, index) => (
          <div 
            key={index}
            className={`absolute ${item.position} ${item.animation} opacity-10 dark:opacity-5`}
          >
            <img 
              src={item.logo} 
              alt={`Floating tech logo ${index}`}
              className={`${item.size} object-contain filter grayscale`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & 
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ml-2">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in embedded systems, IoT development, and hardware-software integration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-6 card-hover border-2 hover:border-purple-200 dark:hover:border-purple-700 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/30"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${category.gradient} text-white mb-4 mx-auto`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
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
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-bold transition-all duration-300 ${
                        hoveredSkill === `${categoryIndex}-${skillIndex}` 
                          ? 'text-purple-600 scale-110' 
                          : 'text-muted-foreground'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-gray-200 dark:bg-gray-700" 
                      />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
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
