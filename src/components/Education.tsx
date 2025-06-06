
import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey in Electronics & Telecommunication Engineering
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  B.Tech in Electronics & Telecommunication Engineering
                </h3>
                <p className="text-lg text-primary font-medium mb-4">
                  Walchand Institute of Technology (W.I.T), Solapur
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">2023 - 2027</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Solapur, Maharashtra</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground font-semibold">CGPA: 9.45</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Key Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <span className="text-sm text-muted-foreground">• Embedded Systems Design</span>
                    <span className="text-sm text-muted-foreground">• IoT Applications</span>
                    <span className="text-sm text-muted-foreground">• Digital Electronics</span>
                    <span className="text-sm text-muted-foreground">• VLSI Technology</span>
                    <span className="text-sm text-muted-foreground">• Microcontroller Programming</span>
                    <span className="text-sm text-muted-foreground">• Signal Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
