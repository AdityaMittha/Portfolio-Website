
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell me about your project or just say hello!" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Your City, Country</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-semibold text-foreground mb-3">Let's Work Together</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <Button variant="outline" className="w-full">
                Download Resume
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
