import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden animate-pulse-slow">
            <img 
              src="/profile-image.jpg" 
              alt="Marko Petrov" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
          Hello, I'm Marko Petrov
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-mono animate-slide-up">
          ML/DSA Developer | Computer Science Student | Competitive Programmer
        </p>
        
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-8 font-mono text-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="mb-2">
            CS student at Faculty of Computer Science & Engineering, Skopje
          </p>
          <p>
            Passionate about startups, financial markets, and building ML solutions.
          </p>
          <p className="mb-2">
            2nd overall - Macedonian Olympiad in Informatics | Honorable Mention - International Olympiad in Informatics
          </p>
          
        </div>
        
        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="/projects"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-mono text-sm hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-mono text-sm hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex gap-6 justify-center">
          {[
            { name: 'GitHub', url: 'https://github.com/L1near' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/marko-petrov' },
            { name: 'Kaggle', url: 'https://kaggle.com/l1near' }
          ].map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-mono text-sm animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

