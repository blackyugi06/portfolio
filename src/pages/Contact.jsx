import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 gradient-text animate-slide-up">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white font-mono resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-mono text-sm hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-center text-green-600 dark:text-green-400 font-mono text-sm animate-fade-in">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6 font-mono">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      Email:
                    </span>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-black dark:text-white hover:underline font-mono text-sm"
                    >
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      Phone:
                    </span>
                    <a
                      href="tel:+1234567890"
                      className="text-black dark:text-white hover:underline font-mono text-sm"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      Location:
                    </span>
                    <span className="text-black dark:text-white font-mono text-sm">
                      City, Country
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 font-mono">
                  Social Links
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'GitHub', url: '#' },
                    { name: 'LinkedIn', url: '#' },
                    { name: 'Twitter', url: '#' },
                    { name: 'Instagram', url: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 font-mono text-sm"
                    >
                      {social.name} →
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

