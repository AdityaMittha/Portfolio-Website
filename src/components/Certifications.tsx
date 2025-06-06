
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Award, ExternalLink, Eye, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certifications = [
    {
      title: "AWS IoT Training",
      issuer: "Amazon Web Services (AWS)",
      date: "September 2024",
      type: "Cloud & IoT",
      description: "Comprehensive training on AWS IoT services, device management, and cloud integration for IoT applications.",
      skills: ["AWS IoT Core", "Device Management", "Cloud Integration", "MQTT"],
      credentialUrl: "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link",
      certificateFile: "aws-iot-certificate.pdf"
    },
    {
      title: "Design Thinking for Innovation",
      issuer: "Coursera",
      date: "2024",
      type: "Innovation & Design",
      description: "Learned systematic approach to innovation and problem-solving using design thinking methodologies.",
      skills: ["Design Thinking", "Innovation", "Problem Solving", "User Experience"],
      credentialUrl: "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link",
      certificateFile: "design-thinking-certificate.pdf"
    },
    {
      title: "Digital Electronics & VLSI",
      issuer: "Codec Technologies Pvt. Ltd.",
      date: "June 2025",
      type: "AICTE Approved",
      certificateId: "E19E86-0116588288923",
      description: "Industry-approved certification in digital electronics fundamentals and VLSI design principles.",
      skills: ["Digital Electronics", "VLSI Design", "Logic Circuits", "Semiconductor Technology"],
      credentialUrl: "https://drive.google.com/drive/folders/1beJ-FUR_qat3Jptq35LWjWsMjbk50w3D?usp=drive_link",
      certificateFile: "Aditya Anand Mittha - Certificate.pdf",
      featured: true
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and specialized training in emerging technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 ${cert.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                {cert.featured && (
                  <span className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                {cert.certificateId && (
                  <div className="text-xs text-muted-foreground">
                    ID: {cert.certificateId}
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {cert.type}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Certificate
                  </a>
                </Button>
                
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Achievements */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Additional Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  National Electronics Quiz Winner
                </h4>
                <p className="text-muted-foreground">
                  Winner of Quizotronics - National-level Electronics Quiz Competition
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Student Leadership
                </h4>
                <p className="text-muted-foreground">
                  Joint Treasurer - ISTE Student Chapter, W.I.T Solapur
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
