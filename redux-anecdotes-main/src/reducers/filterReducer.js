import { createSlice } from "@reduxjs/toolkit"

const initialFilterState = {
    data: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,

    reducers: {
        filterChange(state, action){
            state.data = action.payload
        }
    }
})

// const filterReducer = (state = initialFilterState, action) => {
//     console.log(action)

//     switch (action.type) {
//         case 'SET_FILTER':
//             return action.payload
//         default: return state
//     }
// }

// export const filterChange = (data) => {
//     return {
//         type: 'SET_FILTER',
//         payload: {
//             data: data,
//         }
//     }
// }

// export default filterReducer

export const  {filterChange} = filterSlice.actions
export default filterSlice.reducer