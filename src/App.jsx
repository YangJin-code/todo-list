import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import './App.css'
import { useState, useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "카페인 에너지 음료1",
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "카페인 에너지 음료2",
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "아르기닌 에너지 음료",
    date: new Date().getTime()
  }
]


function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId, updates) => {

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == targetId
          ? { ...todo, ...updates }
          : todo
      )
    )

  }

  const onDelete=(targetId)=>{
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  }
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
