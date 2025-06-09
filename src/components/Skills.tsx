
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Cpu, Cloud, Wrench, Zap, Brain } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-electric-violet to-cosmic-blue",
      skills: [
        { name: "C/C++", level: 90, specialty: "Embedded Systems" },
        { name: "Embedded C", level: 85, specialty: "Microcontrollers" },
        { name: "Python", level: 80, specialty: "Automation & AI" },
        { name: "JavaScript", level: 75, specialty: "Web Integration" },
      ]
    },
    {
      title: "Hardware & Boards",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-cosmic-blue to-quantum-teal",
      skills: [
        { name: "ESP32", level: 95, specialty: "IoT Development" },
        { name: "Arduino", level: 90, specialty: "Prototyping" },
        { name: "Raspberry Pi", level: 80, specialty: "Edge Computing" },
        { name: "PCB Design", level: 75, specialty: "Hardware Design" },
      ]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-quantum-teal to-neo-mint",
      skills: [
        { name: "Arduino IDE", level: 95, specialty: "Primary IDE" },
        { name: "PlatformIO", level: 85, specialty: "Advanced Development" },
        { name: "Wokwi", level: 90, specialty: "Simulation" },
        { name: "Proteus", level: 85, specialty: "Circuit Design" },
      ]
    },
    {
      title: "IoT & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-neo-mint to-plasma-pink",
      skills: [
        { name: "Firebase", level: 85, specialty: "Real-time Database" },
        { name: "AWS IoT", level: 80, specialty: "Cloud Integration" },
        { name: "MQTT", level: 85, specialty: "Communication Protocol" },
        { name: "Blynk", level: 80, specialty: "Mobile Integration" },
      ]
    },
    {
      title: "Core Technologies",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-plasma-pink to-cyber-purple",
      skills: [
        { name: "IoT Systems", level: 90, specialty: "End-to-End Solutions" },
        { name: "Embedded Systems", level: 88, specialty: "Real-time Systems" },
        { name: "VLSI Design", level: 75, specialty: "Digital Circuits" },
        { name: "Signal Processing", level: 80, specialty: "Data Analysis" },
      ]
    },
    {
      title: "Emerging Tech",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-cyber-purple to-electric-violet",
      skills: [
        { name: "Machine Learning", level: 75, specialty: "Edge AI" },
        { name: "Computer Vision", level: 70, specialty: "Image Processing" },
        { name: "Robotics", level: 80, specialty: "Autonomous Systems" },
        { name: "Blockchain", level: 65, specialty: "IoT Security" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-modern bg-mesh">
      <div className="container-modern">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6 slide-up">
            Skills & Expertise
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed fade-in-delayed stagger-1">
            Comprehensive technical expertise spanning embedded systems, IoT development, and cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`card-floating scale-in stagger-${categoryIndex + 1}`}
            >
              <div className="p-8">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-4 pulse-glow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-space font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="space-y-3"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-space font-semibold text-foreground">
                            {skill.name}
                          </span>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400">
                            {skill.specialty}
                          </div>
                        </div>
                        <span className={`text-lg font-space font-bold transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` 
                            ? 'text-primary scale-110' 
                            : 'text-neutral-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="card-glass p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-space font-bold text-gradient-primary mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into innovative IoT solutions? Let's collaborate and create technology that makes a difference.
            </p>
            <button className="btn-primary">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
