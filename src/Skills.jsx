import "aos/dist/aos.css";
const Skills = () => {
  const skillSet = [
    {
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & OS",
      skills: ["Ubuntu / Linux", "Git & GitHub", "VS Code", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          My Technical Skills
          <div className="h-[1px] bg-gray-700 flex-1 hidden md:block"></div>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillSet.map((item, index) => (
            <div
              data-aos='flip-down'
              key={index}
              className="bg-[#112240] p-8 rounded-xl border border-blue-900/30 hover:border-blue-400/50 transition-all group"
            >
              <h3 className="text-blue-400 font-mono text-xl mb-6">
                {item.category}
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors"
                  >
                    <span className="text-blue-400 text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
