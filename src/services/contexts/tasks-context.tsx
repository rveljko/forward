import { tasks as defaultTasks } from '@data/tasks'
import { Task, TaskSort } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

type TasksContextProviderProps = {
  children: React.ReactNode
}

type TasksContextType = {
  tasks: Task[]
  sort: TaskSort
  setSort: (key: TaskSort) => void
  getSortedTasks: () => Task[]
  getTaskById: (id: Task['id']) => Task
  createNewTask: (newTask: Task) => void
  updateTaskTitle: (id: Task['id'], title: Task['title']) => void
  updateTaskStatus: (id: Task['id']) => void
  duplicateTask: (id: Task['id']) => void
  deleteTask: (id: Task['id']) => void
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
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = (searchParams.get('sort') || 'date-desc') as TaskSort

  function setSort(key: TaskSort) {
    setSearchParams((prevParams) => {
      prevParams.set('sort', key)
      return prevParams
    })
  }

  function getSortedTasks() {
    switch (sort) {
      case 'date-asc':
        return [...tasks].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      case 'date-desc':
        return [...tasks].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      case 'name-asc':
        return [...tasks].sort((a, b) => a.title.localeCompare(b.title))
      case 'name-desc':
        return [...tasks].sort((a, b) => b.title.localeCompare(a.title))
      default:
        return tasks
    }
  }

  function getTaskById(id: Task['id']) {
    return tasks.find((task) => task.id === id)!
  }

  function createNewTask(newTask: Task) {
    setTasks((prevTasks) => [
      { ...newTask, id: uuidv4(), createdAt: new Date() },
      ...prevTasks,
    ])
  }

  function updateTaskTitle(id: Task['id'], title: Task['title']) {
    const task = getTaskById(id)

    setTasks((prevTasks) => [
      { ...task, title },
      ...prevTasks.filter((task) => task.id !== id),
    ])
  }

  function updateTaskStatus(id: Task['id']) {
    const task = getTaskById(id)

    setTasks((prevTasks) => [
      { ...task, isChecked: !task.isChecked },
      ...prevTasks.filter((task) => task.id !== id),
    ])
  }

  function duplicateTask(id: Task['id']) {
    const task = getTaskById(id)

    setTasks((prevTasks) => [
      { ...task, id: uuidv4(), isChecked: false, createdAt: new Date() },
      ...prevTasks,
    ])
  }

  function deleteTask(id: Task['id']) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        sort,
        setSort,
        getSortedTasks,
        getTaskById,
        createNewTask,
        updateTaskTitle,
        updateTaskStatus,
        duplicateTask,
        deleteTask,
      }}
    >
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
