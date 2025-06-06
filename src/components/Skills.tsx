
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Embedded C", level: 85 },
        { name: "Python", level: 80 },
      ]
    },
    {
      title: "Hardware & Boards",
      skills: [
        { name: "ESP32", level: 95 },
        { name: "Arduino", level: 90 },
        { name: "Raspberry Pi", level: 80 },
        { name: "PCB Design", level: 75 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Arduino IDE", level: 95 },
        { name: "Proteus", level: 85 },
        { name: "Wokwi", level: 90 },
        { name: "Firebase", level: 80 },
      ]
    },
    {
      title: "IoT & Cloud",
      skills: [
        { name: "Blynk IoT", level: 85 },
        { name: "Ubidots", level: 80 },
        { name: "AWS IoT", level: 75 },
        { name: "MQTT", level: 80 },
      ]
    },
    {
      title: "Core Technologies",
      skills: [
        { name: "IoT Systems", level: 90 },
        { name: "Embedded Systems", level: 88 },
        { name: "VLSI", level: 75 },
        { name: "Digital Circuits", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in embedded systems, IoT development, and hardware-software integration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
