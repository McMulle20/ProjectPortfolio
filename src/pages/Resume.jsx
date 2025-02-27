import resumePDF from "../assets/images/resumesample.pdf"; // Import the PDF

function Resume() {
  return (
    <section className="resume-section">
    <a href="/resumesample.pdf" download>Download Resume</a>
      <h3>Proficiencies:</h3>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Typescript</li>
        <li>Inquirer</li>
      </ul>
    </section>
  );
}

export default Resume;
