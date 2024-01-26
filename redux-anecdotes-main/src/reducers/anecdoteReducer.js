import { createSlice } from "@reduxjs/toolkit"
import anectodeService from "../services/anectodeService"


// const anecdotesAtStart = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//     return {
//         content: anecdote,
//         id: getId(),
//         votes: 0
//     }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
    name: 'anectodes',
    initialState: [],

    reducers: {
        vote(state, action) {
            // console.log(action)
            return state.map(anecdote => {
                return anecdote.id !== action.payload.id
                    ? anecdote
                    : action.payload
            })
        },

        add(state, action) {

            return [
                ...state,
                action.payload
                // {
                //     content: action.payload, 
                //     id: getId(), 
                //     votes: 0
                // }
            ]
        },

        addAnectodes(state, action) {
            return action.payload
        }
    }
})



export const initializeAnecdotes = () => {
    return async dispatch => {
        const anectodes = await anectodeService.getAll()
        dispatch(addAnectodes(anectodes))
    }
}

export const createNewAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anectodeService.createAnecdote(content)
        dispatch(add(newAnecdote))
    }
}

export const voteOnAnAnecdote = (anecdote) => {
    return async dispatch => {

        const modifiedValue = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        await anectodeService.voteAnectode(modifiedValue.id, modifiedValue)
        dispatch(vote(modifiedValue))
    }
}

// const anectodeReducer = (state = initialState, action) => {
//     console.log('state now: ', state)
//     console.log(action)
//     switch (action.type) {
//         case 'VOTE':
//             const anecdoteToChange = state.find(anectode => {
//                 return anectode.id === action.payload.id
//             })

//             anecdoteToChange.votes = anecdoteToChange.votes + 1
//             return state.map(anectode => {
//                 return anectode.id !== action.payload.id
//                     ? anectode
//                     : anecdoteToChange
//             })
//         case 'ADD':
//             return [...state, action.payload]
//         default: return state
//     }
// }

// export const vote = (id) => {
//     return {
//         type: 'VOTE',
//         payload: {
//             id
//         }
//     }
// }

// export const add = (anecdote) => {
//     return {
//         type: 'ADD',
//         payload: {
//             content: anecdote,
//             id: getId(),
//             votes: 0
//         }
//     }
// }

export default anecdoteSlice.reducer
export const { add, vote, addAnectodes } = anecdoteSlice.actions