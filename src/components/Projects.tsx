import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  features: string[];
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'School Management System',
      description: 'A software appliction designed to streamline and automate the administrative and academic tasks within an aducation institution.',
      longDescription: 'Developed a full-stack School Management System using React.js, Node.js, and MySQL to manage student and teacher data efficiently. Developed a full-stack School Management System using React.js, Node.js, and MySQL to manage student and        teacher data efficiently.  ',
      technologies: ['React.js', 'Node.js', 'Typescript', 'Tailwind CSS', 'Express.js', 'MySQL, Prisma'],
      image: 'https://smartstudent.app/media/2022/09/managment-software.png',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
      features: ['User Authentication', 'Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Korean Character Animation',
      description: 'I creating 3D animations using HTML, CSS, and JavaScript to create a unique engaging scrolling animation using of canvas. ',
      longDescription: 'We’ll start by setting up the HTML structure and CSS styling to create the canvas element that will serve as our animation stage. Then we’ll dive into the JavaScript code, where we’ll use various techniques to manipulate the canvas and create the 3D effect.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      image: 'https://cdn3.f-cdn.com//files/download/213820523/Screenshot_5.png?width=780&height=439&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend',
      features: ['3D Animation', '', 'create a unique engaging scrolling animation using of canvas', 'It showing 3D effect',]
    },
    {
      id: 3,
      title: 'Satyam-Creation',
      description: 'Beautiful weather app with location-based forecasts',
      longDescription: 'An elegant weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based weather data and beautiful visualizations.',
      technologies: ['React.js', 'Javascript', 'CSS3'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend',
      features: ['User-friendly interface ', 'Easy navigation', 'Data Visualization', 'Responsive Design']
    },
    // {
    //   id: 4,
    //   title: 'API Gateway Service',
    //   description: 'Microservices API gateway with authentication and rate limiting',
    //   longDescription: 'A robust API gateway service designed for microservices architecture, featuring authentication, rate limiting, request routing, and comprehensive monitoring capabilities.',
    //   technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    //   image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Backend',
    //   features: ['Request Routing', 'Authentication', 'Rate Limiting', 'Load Balancing', 'API Monitoring']
    // },
    // {
    //   id: 5,
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for social media performance tracking',
    //   longDescription: 'A comprehensive analytics platform that tracks social media performance across multiple platforms, providing insights and detailed reporting for content creators and businesses.',
    //   technologies: ['React', 'D3.js', 'Python', 'Flask', 'MongoDB'],
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Full Stack',
    //   features: ['Multi-platform Integration', 'Data Visualization', 'Performance Metrics', 'Automated Reports', 'Custom Dashboards']
    // },
    {
      id: 6,
      title: 'Mobile News App',
      description: 'Developed a cutting-edge news application featuring a user-friendly interface for easy navigation and exploration of diverse news categories. ',
      longDescription: 'Developed a cutting-edge news application featuring a user-friendly interface for easy navigation and exploration of diverse news categories. Implemented real-time updates to ensure users have access to the latest news content instantly. Integrated advanced filtering mechanisms allowing users to customize their news feed based on individual preferences and interests.',
      technologies: ['Kotlin', 'Firebase', 'API',],
      image: 'https://newsmarketing.in/wp-content/uploads/2023/02/breaking-news-maker1-2.png',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile',
      features: ['User-friendly interface ', 'Easy navigation', 'Real-time updates ', 'advanced filtering mechanisms', 'customize their news fee']
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const prevProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
      setSelectedProject(projects[prevIndex]);
    }
  };

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className={`mt-6 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Some of my recent work and personal projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } rounded-xl shadow-lg hover:shadow-2xl overflow-hidden`}
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <link
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </link>
                      <link
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </link>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className={`text-sm font-medium mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {project.category}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode 
                            ? 'bg-gray-600 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-2xl`}>
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-inherit">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedProject.title}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevProject}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextProject}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    About This Project
                  </h4>
                  <p className={`mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedProject.longDescription}
                  </p>

                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features
                  </h4>
                  <ul className={`space-y-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <link 
                      href={selectedProject.liveUrl}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </link>
                    <link
                      href={selectedProject.githubUrl}
                      className={`flex items-center space-x-2 px-6 py-3 border-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'border-gray-600 text-gray-300 hover:border-white hover:text-white' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                      }`}
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;