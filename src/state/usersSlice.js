import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },

  reducers: {
    setUser: (state = initialState, action) => {
      state.currentUser = action.payload;
      console.log("Action payload", action.payload)
    },
  },
});


export const { setUser } = userSlice.actions;
export const selectUser = (state) => {
  console.log(state); // { mySlice: { ... }}
  return state;
}; // i am using ? because it shows undefind



export default userSlice.reducer;
