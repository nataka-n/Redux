
import TaskFilter from './components/todos/TaskFilter'
import TaskInput from './components/todos/TaskInput'
import TaskList from './components/todos/TaskList'
import './styles/App.css'

function App() {
  return (
    <div className='App'>
      <h1>Список задач на Redux</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  )
}

export default App
