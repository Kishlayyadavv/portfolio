import React from 'react';
import { Linkedin, Mail, ExternalLink, Download, Code2, Briefcase, User, Rocket } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 hover-glow">
          <img 
            src="dist\assets\profile.jpg" 
            alt="Kishlay Yadav"
            className="w-full h-full object-cover hover-scale"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-gradient hover-lift">
          Kishlay Yadav
        </h1>
        <p className="text-xl text-gray-400 mb-8 animate-slide-up">Full Stack Developer</p>
        <div className="flex gap-4">
          <a href="https://github.com/kishlayyadavv" target="_blank" rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-6">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/kishlayyadav/" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-rotate-6">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:forcollegework357@gmail.com"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-6">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-gradient hover-lift">
            <User className="w-6 h-6" /> About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p className="hover-lift">
            I am an experienced web developer with a strong foundation in both frontend and backend technologies, having worked on various projects such as full stack development for the startups. I am also proficient in database management with MongoDB and MySQL. I am passionate about modern development practices and have a preference for clean, maintainable code. My collaborative experience, along with my adaptability and constant learning, allows me to tackle diverse challenges and deliver impactful solutions in web development and consultancy services.
            </p>
            <p className="hover-lift">
              My tech stack includes React, Node.js, TypeScript, and various modern web technologies.
              I'm dedicated to writing clean, maintainable code and creating exceptional user experiences.
            </p>
            <div className="flex justify-center mt-8">
              <a href="dist\assets\Kishlay_Resume-hackerresume (1).pdf" download 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-gradient hover-lift">
            <Code2 className="w-6 h-6" /> Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} 
                className="bg-gray-800 p-4 rounded-lg text-center transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-gradient hover-lift">
            <Rocket className="w-6 h-6" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured e-commerce solution with real-time inventory management.',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management tool with real-time updates.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
              },
              {
                title: 'AI Chat Interface',
                description: 'Modern chat application with AI-powered responses.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
              }
            ].map((project) => (
              <div key={project.title} className="card-hover bg-gray-800 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover-scale" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:gap-3">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-gradient hover-lift">
            <Briefcase className="w-6 h-6" /> Work Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                role: 'Senior Full Stack Developer',
                company: 'Tech Innovations Inc.',
                period: '2021 - Present',
                description: 'Leading development of enterprise-scale applications.'
              },
              {
                role: 'Full Stack Developer',
                company: 'Digital Solutions Ltd.',
                period: '2019 - 2021',
                description: 'Developed and maintained multiple client projects.'
              }
            ].map((exp) => (
              <div key={exp.role} className="card-hover bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gradient">{exp.role}</h3>
                <div className="text-blue-400 mb-2">{exp.company}</div>
                <div className="text-gray-400 mb-4">{exp.period}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="hover-lift">© 2024 Kishlay Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
