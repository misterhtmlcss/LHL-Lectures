import React, { useState, useEffect } from 'react';
import Projects from './ProjectList/Projects.jsx';
import Form from './Form/Form.jsx'
import './App.css';

function App() {
  const [projects, setProjects] = useState([])

  // Go to jsonbox.io and see the code available. It's unique to each render of the page.
  // This is a great place to start playing with full stack applications!!
  const url = `https://jsonbox.io/box_02a74304db89e5db08ca`

  const addNewProject = async projectObj => {
    console.log("projectObj", projectObj);
    // setProjects([...projects, projectObj])
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(projectObj),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('response',data)
      setProjects([...projects, data])
    });
  }

  // const deleteProject = index => {
  //   const projectsTemp = [...projects]
  //   projectsTemp.splice(index, 1)
  //   setProjects(projectsTemp)
  // }

  // Version without Async/Await, just uses Promises (JS version ES6)
  // const getStudentProjects = url => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setProjectss(data)
  //     });
  // }

  const getStudentProjects = async url => {
    // This is the version with Async/Await
    return await fetch(url, {
      // These are defaults. I can comment them out and it will all work out just fine.
      // method: "GET",
      // mode: "cors",
      // cache: "no-cache",
      // headers: {
      //   "Content-Type": "application/json"
      // }
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setProjects(data)
      });
  }


  useEffect(() => {
    getStudentProjects(url)
  }, [url]);

  return (
    <div className="App">
      <h1>SUPER STUDENT PROJECT MANAGER</h1>
      <Form addNewProject={addNewProject} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
