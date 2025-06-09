
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award, Star, Trophy, Target } from 'lucide-react';

const Education = () => {
  const achievements = [
    { icon: <Star className="w-5 h-5" />, label: "Academic Excellence", value: "9.45 CGPA" },
    { icon: <Trophy className="w-5 h-5" />, label: "Class Rank", value: "Top 5%" },
    { icon: <Target className="w-5 h-5" />, label: "Specialization", value: "IoT & Embedded" },
  ];

  const focusAreas = [
    "Embedded Systems Design",
    "IoT Applications & Architecture", 
    "Digital Electronics & VLSI",
    "Microcontroller Programming",
    "Signal Processing & Analysis",
    "Hardware-Software Integration"
  ];

  return (
    <section id="education" className="section-modern">
      <div className="container-modern">
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6 slide-up">
            Education
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed fade-in-delayed stagger-1">
            Academic excellence in Electronics & Telecommunication Engineering with a focus on cutting-edge technologies
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card-modern p-12 scale-in stagger-2">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Education Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="bg-gradient-to-br from-electric-violet to-cosmic-blue p-4 rounded-2xl text-white pulse-glow">
                    <GraduationCap className="w-10 h-10" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-space font-bold text-foreground mb-3">
                      B.Tech in Electronics & Telecommunication Engineering
                    </h3>
                    <p className="text-xl text-gradient-primary font-space font-semibold mb-6">
                      Walchand Institute of Technology (W.I.T), Solapur
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Duration</div>
                          <div className="font-space font-semibold">2023 - 2027</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Location</div>
                          <div className="font-space font-semibold">Solapur, Maharashtra</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                        <Award className="w-5 h-5 text-primary" />
                        <div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">CGPA</div>
                          <div className="font-space font-semibold text-gradient-primary">9.45</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Focus Areas */}
                <div className="card-glass p-8">
                  <h4 className="text-xl font-space font-bold text-foreground mb-6">
                    <span className="text-gradient-secondary">Key Focus Areas</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {focusAreas.map((area, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-cosmic-blue rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-neutral-700 dark:text-neutral-300 font-inter">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Achievements Sidebar */}
              <div className="space-y-6">
                <h4 className="text-xl font-space font-bold text-gradient-primary text-center mb-6">
                  Academic Highlights
                </h4>
                
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="card-floating p-6 text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-electric-violet to-cosmic-blue text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h5 className="font-space font-semibold text-foreground mb-2">
                      {achievement.label}
                    </h5>
                    <p className="text-lg font-space font-bold text-gradient-primary">
                      {achievement.value}
                    </p>
                  </div>
                ))}
                
                {/* Additional Info Card */}
                <div className="card-glass p-6 text-center">
                  <h5 className="font-space font-bold text-foreground mb-3">
                    Academic Philosophy
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Committed to excellence through continuous learning, practical application, 
                    and innovative problem-solving in the field of electronics engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
