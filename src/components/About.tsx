
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const strengths = [
    "Quick learner with real-world application mindset",
    "Strong debugging and circuit understanding", 
    "Great at merging hardware + software",
    "Passionate about creating smart, affordable solutions"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about developing energy-efficient and innovative smart devices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated Electronics & Telecommunication Engineering student at Walchand Institute 
              of Technology, Solapur, with a strong foundation in embedded systems, IoT development, 
              and hardware-software integration.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech with a CGPA of 9.45, I specialize in creating innovative 
              solutions using ESP32, Arduino, and various sensors. My passion lies in developing 
              smart, energy-efficient devices that solve real-world problems.
            </p>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-semibold text-foreground mb-4">Core Strengths</h3>
              <div className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">IoT Systems Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Embedded Programming</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Hardware-Software Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Smart Device Design</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">9.45</h3>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </Card>
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
