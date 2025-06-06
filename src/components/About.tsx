
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Quick learner with real-world application mindset",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Strong debugging and circuit understanding",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      text: "Great at merging hardware + software",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Passionate about creating smart, affordable solutions",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  const achievements = [
    { number: "9.45", label: "CGPA", gradient: "from-purple-400 to-pink-500" },
    { number: "3+", label: "Major Projects", gradient: "from-blue-400 to-cyan-500" },
    { number: "5+", label: "Certifications", gradient: "from-green-400 to-teal-500" },
    { number: "2", label: "Internships", gradient: "from-orange-400 to-red-500" }
  ];

  const activities = [
    { activity: "IoT Systems Development", icon: "🔧" },
    { activity: "Embedded Programming", icon: "💻" },
    { activity: "Hardware-Software Integration", icon: "⚡" },
    { activity: "Smart Device Design", icon: "🚀" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About 
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500 bg-clip-text text-transparent ml-2">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about developing energy-efficient and innovative smart devices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/30 p-6 rounded-xl shadow-lg border-2 border-purple-100 dark:border-purple-800">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a motivated Electronics & Telecommunication Engineering student at Walchand Institute 
                of Technology, Solapur, with a strong foundation in embedded systems, IoT development, 
                and hardware-software integration.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/30 p-6 rounded-xl shadow-lg border-2 border-blue-100 dark:border-blue-800">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech with a CGPA of 9.45, I specialize in creating innovative 
                solutions using ESP32, Arduino, and various sensors. My passion lies in developing 
                smart, energy-efficient devices that solve real-world problems.
              </p>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-white to-pink-50/30 dark:from-gray-800 dark:to-pink-900/30 border-2 border-pink-100 dark:border-pink-800 card-hover">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-purple-500" />
                Core Strengths
              </h3>
              <div className="space-y-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${strength.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {strength.icon}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{strength.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-800 dark:to-teal-900/30 border-2 border-teal-100 dark:border-teal-800 card-hover">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-teal-500" />
                What I Do
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 hover:shadow-md transition-all duration-300">
                    <span className="text-2xl">{activity.icon}</span>
                    <span className="text-muted-foreground">{activity.activity}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Enhanced Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center card-hover bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 hover:border-purple-200 dark:hover:border-purple-700">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2`}>
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{achievement.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
