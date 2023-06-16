export interface Project {
  id: number,
  title: string,
  tag: string,
  description: string,
  assigned: {
    id: number,
    firstName: string,
    lastName: string,
    email: string
  }[],
  tasks: {
      id: number,
      title: string,
      completed: boolean
    }[],
  status: string,
  priority: string,
  startDate: string,
  dueDate: string,
  files: {
    id: number,
    title: string,
    path: string
  }[],
  completed: boolean
}