
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives my passion for development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated developer with a passion for creating innovative solutions that make a difference. 
              With several years of experience in web development, I specialize in building responsive, 
              user-friendly applications using modern technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a 
              love for problem-solving and creating digital experiences that users enjoy. I'm always 
              eager to learn new technologies and take on challenging projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Backend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Mobile Development</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
