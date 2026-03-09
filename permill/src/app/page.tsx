export async function Page() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <button>Adicionar tarefa</button>

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
          <tr>
            <td>1</td>
            <td>Exemplo de tarefa</td>
            <td>Pendente</td>
            <td>2026-03-09</td>

            <td>
              <button>Atualizar</button>
              <button>Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}