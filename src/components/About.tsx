import React from 'react';
import { User, Code, Palette, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that follows best practices',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful interfaces with attention to user experience',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: User,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating clearly',
    },
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Passionate Developer & Designer
              </h3>
              
              <div className={`text-lg leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="mb-4">
                  I recently completed my BCA degree and looking for opportunity. Tech Stack: Java, Spring Boot, React.js, JavaScript, HTML, CSS and MySQL, Also, have hands-on experience in Android app development using Kotlin.
                </p>
                <p className="mb-4">
                  My journey began with a curiosity for how things work on the web, and it has evolved 
                  into a passion for creating digital experiences that not only look great but also 
                  solve real problems for users.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying outdoor activities that keep me balanced and inspired.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className={`text-center p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-md`}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Projects Completed
                  </div>
                </div>
                <div className={`text-center p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-md`}>
                  <div className="text-3xl font-bold text-purple-600 mb-2">I am a Fresher</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white hover:shadow-lg'
                  } shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-100'
                  }`}>
                    <item.icon className={`w-6 h-6 ${
                      darkMode ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;