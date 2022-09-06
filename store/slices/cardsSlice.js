import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  usersInfo: [],
};

export const counterSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    //не довел до ума
    // for (let i = 1; i <= action.payload.lenght; ++i) {
    //   if (action.payload[i - 1].id === action.payload[i].id) {
    //     action.payload.splice(i, 1);
    //   } else {
    //     break;
    //   }
    // }
    setPostState: (state, action) => {
      for (let i = 1; i <= 10; ++i) {
        if (action.payload[i - 1].id === action.payload[i].id) {
          action.payload.splice(i, 9);
        } else {
          break;
        }
      }
      state.posts = action.payload;
    },
    getUserInfoState: (state, action) => {
      state.usersInfo = action.payload;
    },
  },
});

export const { setPostState, getUserInfoState } = counterSlice.actions;

export default counterSlice.reducer;
