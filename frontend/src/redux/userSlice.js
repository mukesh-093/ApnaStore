
import { createSlice } from "@reduxjs/toolkit" 
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // Action to set user
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

// Export the action
export const { setUser } = userSlice.actions

// Export the reducer
export default userSlice.reducer
