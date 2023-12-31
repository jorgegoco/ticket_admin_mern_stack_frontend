import { useParams } from 'react-router-dom'
import EditNoteForm from './EditNoteForm'
import { useGetNotesQuery } from './notesApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditNote = () => {
  useTitle('ticketAdmin: Edit Note')

  const { id } = useParams()

  const { note } = useGetNotesQuery("notesList", {
      selectFromResult: ({ data }) => ({
          note: data?.entities[id]
      }),
  })

  const { users } = useGetUsersQuery("usersList", {
      selectFromResult: ({ data }) => ({
          users: data?.ids.map(id => data?.entities[id])
      }),
  })

  if (!note || !users?.length) return <PulseLoader color={"#FFF"} />

  const content = <EditNoteForm note={note} users={users} />

  return content
}

export default EditNote
