import React from 'react'
import Project from '../Project/Project.jsx'

const Projects = ({ projects }) => {


  const parsedProjects = projects.map((project, idx) => {
      return (
        <Project
          key={project["_id"]} // Should be something unique. Array index is used, but not the best choice.
          dataID={idx}
          projectName={project["project-name"]}
          studentNames={project["student-leader"]}
          techStack={project["tech-stack"]}
          description={project["description"]}
      />)
    }
  )

  return (
    <>
      {/* Alternative 1 */}
      <section>
        {parsedProjects}
      </section>

      <section>
      {/* Alternative 2 */}

        {/* {projects.map(project => {
          console.log('project', project)
          return (
            <Project
              key={project._id} // Supposed to be unique
              projectName={project["project-name"]}
              studentNames={project["student-leader"]}
              techStack={project["tech-stack"]}
              description={project.description}
            />)
          }
        )} */}
      </section>
    </>
  )
}

export default Projects