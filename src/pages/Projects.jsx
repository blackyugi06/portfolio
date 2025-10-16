import { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Hull Tactical S&P500 Prediction',
      description: 'Time series prediction model for S&P500. Used gradient boosters combined with Gated Recurrent Unit (GRU) for enhanced forecasting accuracy.',
      tech: ['Python', 'Machine Learning', 'Gradient Boosting', 'GRU', 'Time Series', 'Financial Data'],
      link: '#',
      github: 'https://github.com/L1near/hull-tactical-sp500-prediction',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 gradient-text animate-slide-up">
          Work
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-black dark:hover:border-white transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`transition-transform duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

