import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  
   
const [todos, setTodos] = useState([
 
])
function handleAddTodos(newTodo){
  const  newTodoList = [...todos, newTodo ]
  setTodos(newTodoList)
}
function handleDeleteTodo(index) {
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  setTodos(newTodoList)
}

function handleEditoDo(index) {

}
  return (
    < >
      <TodoInput handleAddTodos = {handleAddTodos} />
      <TodoList todos = {todos} handleDeleteTodo = {handleDeleteTodo} />
    </>
  )
}

export default App
