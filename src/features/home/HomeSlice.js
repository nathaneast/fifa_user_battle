import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'home',
  initialState: {
    user1: {},
    user2: {}
  },
  reducers: {
    update: (state, action) => {
      state.user1 = { ...state.user1, ...action.payload[0] };
      state.user2 = { ...state.user2, ...action.payload[1] };
    },
    reset: state => {
      state.user1 = {};
      state.user2 = {};
    }
  }
});

export const { update, reset } = slice.actions;

export const selectUser1 = state => state.usersData.user1;
export const selectUser2 = state => state.usersData.user2;

export default slice.reducer;
