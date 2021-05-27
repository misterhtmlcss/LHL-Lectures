import React, { useState } from 'react'

import './Form.css'

const Form = ({addNewProject}) => {
  const [formData, setFormData] = useState({
    "project-name": "Blades of Glory",
    "student-leader": "Bob",
    "tech-stack": "node",
    description: "Win win win!",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(formData)
    setFormData({
      "project-name": "",
      "student-leader": "",
      "tech-stack": "",
      description: "",
    })
  }


  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="projectName"
          value={formData["project-name"]}
          onChange={event => setFormData({ ...formData, "project-name": event.target.value })}
          placeholder="Project Name"
        />
        <input
          type="text"
          name="teamLeader"
          value={formData["student-leader"]}
          onChange={event => setFormData({ ...formData, "student-leader": event.target.value })}
          placeholder="Team Leader Name"
        />
        <input
          type="text"
          name="techStack"
          value={formData["tech-stack"]}
          onChange={event => setFormData({ ...formData, "tech-stack": event.target.value })}
          placeholder="Tech Stack"
        />
        <input type="text"
          name="description"
          value={formData.description}
          onChange={event => setFormData({ ...formData, description: event.target.value })}
          placeholder="Description"
        />
        <button type="submit">ADD NEW PROJECT</button>
      </form>
    </>
  )
}

export default Form