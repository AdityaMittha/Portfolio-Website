
import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Programming Intern",
      company: "Techohacks",
      location: "Remote",
      duration: "Sep 2024 - Oct 2024",
      type: "Programming & Development",
      description: "Built multiple mini-projects using C & embedded programming with focus on virtual simulation expertise. Gained hands-on experience in embedded systems development and debugging.",
      achievements: [
        "Developed 5+ embedded C projects",
        "Mastered virtual simulation techniques",
        "Enhanced debugging and troubleshooting skills",
        "Contributed to open-source embedded projects"
      ],
      skills: ["C Programming", "Embedded Systems", "Virtual Simulation", "Debugging"]
    },
    {
      title: "Digital Electronics & VLSI Intern",
      company: "Codec Technologies Pvt. Ltd.",
      location: "Hybrid",
      duration: "15 May 2025 - 6 June 2025",
      type: "AICTE & ICAC Approved",
      certificateId: "E19E86-0116588288923",
      description: "Comprehensive internship focused on project-based learning in VLSI logic design and digital fundamentals. Worked on advanced digital circuit design and semiconductor technology.",
      achievements: [
        "Completed advanced VLSI design projects",
        "Gained expertise in digital logic fundamentals",
        "Worked with industry-standard VLSI tools",
        "Earned AICTE approved certification"
      ],
      skills: ["VLSI Design", "Digital Electronics", "Logic Design", "Circuit Analysis"]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in embedded systems and VLSI technology
          </p>
        </div>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Header Section */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{internship.title}</h3>
                      <p className="text-primary font-medium">{internship.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{internship.location}</span>
                    </div>
                    {internship.certificateId && (
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">ID: {internship.certificateId}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {internship.type}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{internship.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
