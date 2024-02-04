import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => (
          // / console.log(project)
          <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
// ``In this code, we use the `map` method on the `projects` array to iterate over each project. For each project, we create a `ProjectItem` component and pass the `key` prop as the `id` of the project, and the `project` object itself as the `project` prop.
