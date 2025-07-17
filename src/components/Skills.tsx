import React, { useState, useEffect, useRef } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Java', level: 90, category: 'Backend', icon: '☕' },
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: '🟡' },
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: '🔷' },
    { name: 'Kotlin', level: 80, category: 'Mobile', icon: '📱' },
    { name: 'CSS/Sass', level: 88, category: 'Frontend', icon: '🎨' },
    { name: 'Node.js', level: 82, category: 'Backend', icon: '🟢' },
    { name: 'Express.js', level: 80, category: 'Backend', icon: '📦' },
    { name: 'APIs', level: 90, category: 'Backend', icon: '🌐' },
    { name: 'MySQL', level: 85, category: 'Database', icon: '🗄️' },
    { name: 'HTML5', level: 95, category: 'Frontend', icon: '📄' },
    { name: 'Tailwind CSS', level: 80, category: 'Frontend', icon: '🌊' },
    // { name: 'Python', level: 78, category: 'Backend', icon: '🐍' },
    // { name: 'MongoDB', level: 75, category: 'Database', icon: '🍃' },
    // { name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘' },
    // { name: 'Docker', level: 70, category: 'DevOps', icon: '🐳' },
    // { name: 'AWS', level: 65, category: 'DevOps', icon: '☁️' },
    // { name: 'Git', level: 92, category: 'Tools', icon: '📚' },
    // { name: 'Figma', level: 85, category: 'Design', icon: '🎭' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className={`mt-6 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-700' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className={`font-semibold text-lg ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className={`w-full bg-gray-200 rounded-full h-3 ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <div
                            className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-16">
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Other Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                // 'Vue.js', 'Angular', 'Next.js', 'Express.js', 'Django', 'Flask',
                // 'Redis', 'GraphQL', 'REST APIs', 'Jest', 'Cypress', 'Webpack',
                // 'Vite', 'Tailwind CSS', 'Material-UI', 'Bootstrap'
                'Java', 'Javascript', 'React js', 'Express.js', 'Node.js', 'HTML5', 'CSS3', 'MySQL', 'Git', 'GitHub', 'Tailwind css', 'AWS', 'Firebase', 'Kotlin'
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;