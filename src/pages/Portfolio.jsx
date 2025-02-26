import Project from "../components/Project";

function Portfolio() {
  const projects = [
    { title: "Project 1", image: "/path-to-image.jpg", deployedLink: "#", repoLink: "#" },
    { title: "Project 2", image: "/path-to-image.jpg", deployedLink: "#", repoLink: "#" },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
