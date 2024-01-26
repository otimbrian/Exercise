import { createSlice } from '@reduxjs/toolkit'

const initialNotification = {
    message: null,
    status: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotification,

    reducers: {
        postNotification(state, action) {
            state.message = action.payload.message
            state.status = action.payload.status
        },

        removeNotification(state, ation) {
            state.message = null
            state.status = null
        }
    }
})

export const { postNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
