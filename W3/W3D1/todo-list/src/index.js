import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// Demo Inside - Start

const Todos = (props) => {
  /*
  Code you know:
  Example, but not general practice.
  const todoThingies = useState('')
  const todo = todoThingies[0]
  const setTodo = todoThingies[1]
  */
  const [todos, setTodos] = useState([])
  const [newtodo, setTodo] = useState('')

  const addTodo = event => {
    // Prevent page reload on click
    event.preventDefault()
    setTodo(event.target.value)
  }

  const handleSubmit = event => {
    // Prevent page reload on submit
    event.preventDefault()
    // Is there any data in the Todo field to submit?
    if(newtodo === '') return

    // There is enough data, spread in the existing todos and
    // add a new todo
    setTodos([...todos, {
      id: Date.now(),
      todo: newtodo,
      done: false
    }])
    // Reset input field
    event.target.reset()
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <header>
        <h1>Todos App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={addTodo}/>
          <button type="submit" onSubmit={handleSubmit}>AddTodo</button>
        </form>
      </header>
      <main>
        <ul>
          {
            todos.map(({id, todo, done}, idx) => {
              return (
                <li
                  key={id}
                  onClick={()=> deleteTodo(id)}
                >
                  {todo}
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

// Demo Outside - End


ReactDOM.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>
  ,
  document.getElementById('root')
);


