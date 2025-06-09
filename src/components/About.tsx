
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Target, Lightbulb, Award, Rocket, Brain, Heart, Star } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Innovation",
      description: "Transform complex ideas into practical solutions with lightning speed",
      color: "from-electric-violet to-cosmic-blue"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Technical Mastery",
      description: "Deep expertise in embedded systems and IoT architecture",
      color: "from-cosmic-blue to-quantum-teal"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Builder",
      description: "Driven by the joy of creating technology that matters",
      color: "from-quantum-teal to-neo-mint"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence Focused",
      description: "Committed to delivering outstanding results in every project",
      color: "from-plasma-pink to-cyber-purple"
    }
  ];

  const achievements = [
    { number: "9.45", label: "CGPA Excellence", icon: <Award className="w-5 h-5" /> },
    { number: "5+", label: "Major Projects", icon: <Rocket className="w-5 h-5" /> },
    { number: "8+", label: "Certifications", icon: <Target className="w-5 h-5" /> },
    { number: "2", label: "Internships", icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const highlights = [
    { title: "IoT Systems Architecture", desc: "End-to-end smart device ecosystems" },
    { title: "Embedded Programming", desc: "Real-time systems and microcontrollers" },
    { title: "Hardware Integration", desc: "Seamless hardware-software synergy" },
    { title: "Innovation Leadership", desc: "Pioneering smart, sustainable solutions" }
  ];

  return (
    <section id="about" className="section-modern bg-mesh">
      <div className="container-modern">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6 slide-up">
            About Me
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed fade-in-delayed stagger-1">
            Passionate electronics engineer crafting the future through innovative IoT solutions and embedded systems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Main Content */}
          <div className="space-y-8 scale-in stagger-2">
            <div className="card-modern p-8">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <Rocket className="w-5 h-5 text-primary" />
                  <span className="text-primary font-space font-semibold">Electronics Engineer</span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                I'm a dedicated Electronics & Telecommunication Engineering student at Walchand Institute 
                of Technology, Solapur, with an exceptional academic record and a passion for innovation.
              </p>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                With a CGPA of 9.45, I specialize in creating cutting-edge IoT solutions using ESP32, 
                Arduino, and advanced sensor technologies. My mission is to develop smart, energy-efficient 
                devices that solve real-world challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="font-space font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {highlight.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Strengths & Stats */}
          <div className="space-y-8 scale-in stagger-3">
            {/* Core Strengths */}
            <div className="card-modern p-8">
              <h3 className="text-2xl font-space font-bold text-foreground mb-8 text-center">
                <span className="text-gradient-primary">Core Strengths</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${strength.color} group hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-white/90 dark:bg-black/90 rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${strength.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {strength.icon}
                      </div>
                      <h4 className="font-space font-semibold text-foreground mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="card-floating p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-space font-bold text-gradient-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm font-space font-medium text-neutral-600 dark:text-neutral-400">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
