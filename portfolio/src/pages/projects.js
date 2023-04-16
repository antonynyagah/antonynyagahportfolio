import React from "react";
import "./projects.css"
const projects = [
  {
    id: 1,
    title: "Project 1",
    summary: "A short summary of Project 1.",
    imageUrl: "project1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    summary: "A short summary of Project 2.",
    imageUrl: "project2.jpg",
    link: "#"
  },
  // add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.imageUrl} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
          <a href={project.link}>Learn more</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
