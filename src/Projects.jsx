import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
  const allProjects = [
    {
      title: "KeenKeeper",
      description: "A relationship management system built with Next.js that allows users to track communication history with friends and family. It features dynamic routing and a custom 'Not Found' page implementation.",
      tags: ["Next.js", "Tailwind CSS", "MERN Stack"],
      github: "https://github.com/salman-ibn-riyaj/assignment-7", 
      live: "https://assignment-7-smoky-nine.vercel.app/" 
    },
    {
      title: "Show More On Github",
      description: "There you can see my all the projects those i made with my best effort and consistent patience.",
      tags: ["Next.js", "Tailwind", "React"],
      // github: "https://github.com/salman-ibn-riyaj/portfolio", 
      live: "https://github.com/salman-ibn-riyaj/"
    }
  ];

  return (
    <section id="projects" className="py-15 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">Some Things I’ve Built
          <div className="h-[1px] bg-gray-700 flex-1 hidden md:block"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#112240] p-8 rounded-lg border border-transparent hover:border-blue-400/30 transition-all hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-8">
                <FaFolder className="text-4xl text-blue-400" />
                <div className="flex gap-4 text-gray-400">
                  {/* <a href={project.github} target="_blank" className="hover:text-blue-400 transition-colors">
                    <FaGithub size={22} />
                  </a> */}
                  <a href={project.live} target="_blank" className="hover:text-blue-400 transition-colors">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 font-mono text-xs text-blue-300">
                {project.tags.map(tag => (
                  <li key={tag} className="bg-blue-400/10 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;