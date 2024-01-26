import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnAnecdote } from '../reducers/anecdoteReducer'
import { postNotification, removeNotification } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleVote}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        return state.anectodes.filter(
            anectode => {
                return anectode.content.includes(state.filter.data)
            }
        )
    })

    anecdotes.sort((b, a) => {
        return a.votes - b.votes
    })

    const voteForAnnectode = (id) => {
        const anecdoteToVote = anecdotes.find(a => a.id === id)
        dispatch(voteOnAnAnecdote(anecdoteToVote))

        dispatch(postNotification({message: `Voted For: ${anecdoteToVote.content}`, status: 'success'}))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 2000)
    }

    return (
        <>
            {anecdotes.map(anecdote =>
                <Anecdote handleVote={() => voteForAnnectode(anecdote.id)} anecdote={anecdote} key={anecdote.id} />
            )}
        </>
    )
}

export default AnecdoteList