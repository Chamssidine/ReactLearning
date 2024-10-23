import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  
   
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

function persistData(newlist) {
  localStorage.setItem('todos', JSON.stringify({todos:newlist}))
}
function handleAddTodos(newTodo){
  const  newTodoList = [...todos, newTodo ]
  persistData(newTodoList)
  setTodos(newTodoList)
}
function handleDeleteTodo(index) {
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

useEffect(()=> {

  if(!localStorage) {
    return
  }
  let localTodos = localStorage.getItem('todos')

  if(!localTodos) {

    return
  }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  
}, [ ])
 

function handleEditToDo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}
  return (
    < >
      <TodoInput todoValue ={todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos} />
      <TodoList todos = {todos} handleDeleteTodo = {handleDeleteTodo} handleEditToDo = {handleEditToDo} />
    </>
  )
}

export default App
