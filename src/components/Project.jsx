function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </p>
      </div>
    );
  }
  
  export default Project;
  