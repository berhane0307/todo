export interface Task {
  id: number
  task: string
  priority: string
  details: string
  completed: boolean
}

export interface NewTask {
  task: string
  priority: string
  details: string
}