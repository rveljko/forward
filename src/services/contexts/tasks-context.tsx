import { tasks as defaultTasks } from '@data/tasks'
import { Task } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type TasksContextProviderProps = {
  children: React.ReactNode
}

type TasksContextType = {
  tasks: Task[]
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

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider value={{ tasks }}>{children}</TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks must be within a TasksContextProvider')
  }

  return context
}
