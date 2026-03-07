import { supabase } from './supabase'

export async function getTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function createTask(title: string) {
  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, completed: false }])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function updateTask(id: string, updates: { title?: string; completed?: boolean }) {
  const { data, error } = await supabase
    .from('tasks')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function deleteTask(id: string) {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error(error.message)
  }
}   