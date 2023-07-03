import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
