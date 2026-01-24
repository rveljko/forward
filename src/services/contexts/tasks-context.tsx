import { tasks as defaultTasks } from '@data/tasks'
import { Task } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type TasksContextProviderProps = {
  children: React.ReactNode
}

type TasksContextType = {
  tasks: Task[]
  createNewTask: (newTask: Task) => void
}

export const TasksContext = createContext<TasksContextType | null>(null)

function getInitialTasks(): Task[] {
  const tasks = localStorage.getItem('tasks')
  return tasks ? JSON.parse(tasks) : defaultTasks
}

export default function TasksContextProvider({
  children,
}: TasksContextProviderProps) {
  const [tasks, setTasks] = useState(getInitialTasks)

  function createNewTask(newTask: Task) {
    setTasks((prevTasks) => [
      { ...newTask, id: uuidv4(), createdAt: new Date() },
      ...prevTasks,
    ])
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider value={{ tasks, createNewTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks must be within a TasksContextProvider')
  }

  return context
}
