const Resume = () => {
  const experiences = [
    {
      title: 'Kaggle Competitor',
      company: 'Kaggle',
      period: '2025 - Present',
      description: 'Competing in machine learning competitions, building predictive models, and contributing to the data science community.',
    },
    {
      title: 'Competitive Programming Tutor',
      company: 'High School',
      period: '2023',
      description: 'Mentored students in algorithms, data structures, and competitive programming techniques.',
    },
  ];

  const skills = [
    'Python', 'Machine Learning', 'Data Structures & Algorithms', 'C++',
    'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn',
    'HTML', 'CSS', 'Kaggle', 'Competitive Programming', 'Problem Solving', 'Git'
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Faculty of Computer Science & Engineering, Skopje',
      period: '2024 - Present',
    },
    {
      degree: 'Natural Sciences',
      school: 'Yahya Kemall College',
      period: '2022 - 2024',
    },
    {
      degree: 'IB MYP Programme',
      school: 'Nova International Schools',
      period: '2020 - 2022',
    },
  ];

  const honors = [
    {
      title: 'Honorable Mention - International Olympiad in Informatics',
      organization: 'IOI',
      period: '2023',
    },
    {
      title: '1st Place (Generation) / 2nd Overall - Macedonian Olympiad in Informatics',
      organization: 'Macedonian Olympiad Committee',
      period: '2023',
    },
    {
      title: 'Participant - Balkan Olympiad in Informatics',
      organization: 'Balkan Olympiad Committee',
      period: '2023',
    },
    {
      title: 'Full Scholarship - Faculty of Computer Science & Engineering',
      organization: 'University of Skopje',
      period: '2024',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 gradient-text animate-slide-up">
          Resume
        </h1>

        {/* Experience Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white font-mono">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white font-mono">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-full font-mono text-sm hover:scale-105 transition-transform duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white font-mono">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                  {edu.school} | {edu.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white font-mono">
            Honors & Awards
          </h2>
          <div className="space-y-6">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {honor.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                  {honor.organization} | {honor.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-mono text-sm hover:scale-105 transition-transform duration-300"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;

