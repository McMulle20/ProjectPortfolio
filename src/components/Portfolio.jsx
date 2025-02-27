import "../index.css";

const projects = [
  {
    title: "Website Testing",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://mcmulle20.github.io/Mini-Projects1/",
    githubLink: "https://github.com/McMulle20/Mini-Projects1/deployments/github-pages",
  },
  {
    title: "Weather App",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://bobc04.github.io/Small-Talk-Weather/",
    githubLink: "https://github.com/bobc04/Small-Talk-Weather",
  },
  {
    title: "Employee Tracker",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://bobc04.github.io/Small-Talk-Weather/",
    githubLink: "https://github.com/McMulle20/Employee-Tracker",
  },
  {
    title: "ReadMe Creation",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://your-deployed-app4.com",
    githubLink: "https://github.com/McMulle20/module-07",
  },
  {
    title: "Project Five",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://your-deployed-app5.com",
    githubLink: "https://github.com/yourusername/project5",
  },
  {
    title: "Project Six",
    image: "src/assets/images/week1.jpg",
    deployedLink: "https://your-deployed-app6.com",
    githubLink: "https://github.com/yourusername/project6",
  },
];

function Project() {
  return (
    <section className="portfolio-section">
      <h2>My Projects</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div
          className="portfolio-item"
          key={index}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="portfolio-content">
            <h3>{project.title}</h3>
            <div className="portfolio-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
