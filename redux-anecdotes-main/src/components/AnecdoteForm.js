import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { postNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnnectode = (event) => {
        event.preventDefault()

        const content = event.target.anectode.value
        event.target.anectode.value = ''

        dispatch(createNewAnecdote(content))

        dispatch(postNotification({
            message: `Created: ${content}`,
            status: 'success'
        }))

        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }


    return (
        <form onSubmit={addAnnectode}>
            <div><input name='anectode' /></div>
            <button type='submit'>create</button>
        </form>
    )
}

export default AnecdoteForm