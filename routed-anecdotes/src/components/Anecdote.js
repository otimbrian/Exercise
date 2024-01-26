
const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <div>
            <div>
                <h4>{anecdote.content}</h4>
            </div>
            <div>

                <div>
                    Author: {anecdote.author}
                    votes: {anecdote.votes}
                </div>

                <div><h5>{anecdote.info}</h5></div>

            </div>

            <button onClick={() => handleVote(anecdote.id)}>vote</button>
        </div>
    )
}


export default Anecdote