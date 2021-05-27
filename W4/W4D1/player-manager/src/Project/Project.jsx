import React from 'react'

import './Project.css'

const Project = (props) => {
  const { projectName, studentNames, techStack, description, dataID } = props

  return (
    <article data-id={dataID}>
      <h1>Project name: {projectName}</h1>
      <h2>Student names: {studentNames}</h2>
      <p>Stack: {techStack}</p>
      <p>Description: {description}</p>
    </article>
  )
}

export default Project