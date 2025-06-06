
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Brain, Wind } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Biometric Plant Care System",
      description: "Advanced IoT system using ESP32, DHT22, OLED display, servo motor, and soil moisture sensor. Features custom website with crop-data API, voice input, real-time monitoring, smart irrigation logic, and weather integration.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "DHT22", "OLED", "Servo Motor", "API Integration", "Voice Control"],
      features: [
        "Real-time soil moisture monitoring",
        "Automated irrigation system",
        "Weather API integration",
        "Voice command interface",
        "Crop-specific care recommendations"
      ],
      liveUrl: "#",
      githubUrl: "#",
      wokwiUrl: "#"
    },
    {
      title: "AI-Based Line Tracker Robot",
      description: "Intelligent robot powered by ESP32 with reflectance sensors and AI-based decision logic. Designed for high precision tracking with self-correction capabilities and adaptive path finding.",
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "Reflectance Sensors", "AI Logic", "Motor Control", "Path Planning"],
      features: [
        "AI-powered decision making",
        "Self-correction algorithms",
        "Precision line following",
        "Obstacle detection",
        "Real-time path optimization"
      ],
      liveUrl: "#",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "IoT-Based Smart Air Purifier",
      description: "Automated air quality control system with real-time AQI monitoring, intelligent filter alerts, and comprehensive web dashboard. Provides automatic indoor air quality adjustment based on environmental conditions.",
      icon: <Wind className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "Air Quality Sensors", "Web Dashboard", "Firebase", "MQTT"],
      features: [
        "Automatic AQI control",
        "Smart filter replacement alerts",
        "Real-time monitoring dashboard",
        "Mobile app integration",
        "Energy-efficient operation"
      ],
      liveUrl: "#",
      githubUrl: "#",
      wokwiUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative IoT and embedded systems projects showcasing practical applications
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} className="flex items-center space-x-1">
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} className="flex items-center space-x-1">
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        </Button>
                      )}
                      {project.wokwiUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.wokwiUrl} className="flex items-center space-x-1">
                            <ExternalLink size={16} />
                            <span>Wokwi</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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

export default Projects;
