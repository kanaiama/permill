
import { useEffect, useState } from "react"
import { getTasks, createTask, updateTask, deleteTask } from "../lib/tasks"
import { Task } from "@/types/task"

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    const data = await getTasks()
    setTasks(data)
  }

  async function handleAddTask() {
    if (!title.trim()) return

    await createTask(title)
    setTitle("")
    loadTasks()
  }

  async function handleUpdateTask(id: string) {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    await updateTask(id, { completed: !task.completed })
    loadTasks()
  }

  async function handleDeleteTask(id: string) {
    await deleteTask(id)
    loadTasks()
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleAddTask}>
          Adicionar tarefa
        </button>
      </div>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Status</th>
            <th>Tempo</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleUpdateTask(task.id)}
                />
              </td>
              <td>{new Date(task.created_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDeleteTask(task.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}