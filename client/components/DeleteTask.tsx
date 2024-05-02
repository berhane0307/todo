import * as api from '../apis/apiclinte.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props {
  id: number
}

export function DeleteTask({ id }: Props) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => api.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleDelete = async () => {
    console.log('delete')
    mutation.mutate()
  }

  return (
    <>
      <td>
        <button onClick={handleDelete}>Delete Task</button>
      </td>
    </>
  )
}

export default DeleteTask
