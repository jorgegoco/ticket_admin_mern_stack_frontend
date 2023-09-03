import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate())  // manual subscription when this component mounts
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())  //manual subscription when this component mounts

        return () => {     // cleanup when prefetch component is unmounted (gets out of the dash routes)
            console.log('unsubscribing')
            notes.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch