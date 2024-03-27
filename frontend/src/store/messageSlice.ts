import {Message} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {getLastPostDate} from './messageThunk';

interface PostState {
  postList: Message[],
  loading: boolean,
  lastDate: string | null
}

const initialState: PostState = {
  postList: [],
  loading: false,
  lastDate: null
};

const messageSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLastPostDate.pending, (state) => {
      state.loading = true;
    }).addCase(getLastPostDate.fulfilled, (state) => {
      state.loading = false;
      // if (action.payload) {
      //   state.postList = action.payload;
      //   if (action.payload.length > 0) state.lastDate = action.payload[0].dateTime;
      // }
    }).addCase(getLastPostDate.rejected, (state) => {
      state.loading = false;
    });

    // builder.addCase(getTargetPosts.pending, (state) => {
    //   state.loading = true;
    // }).addCase(getTargetPosts.fulfilled, (state, action) => {
    //   state.loading = false;
    //   if (action.payload) state.postList = action.payload;
    // }).addCase(getTargetPosts.rejected, (state) => {
    //   state.loading = false;
    // });
  }
});

export const postReducer = messageSlice.reducer;
export const selectPostList = (state: RootState) => state.post.postList;
export const selectLoading = (state: RootState) => state.post.loading;
export const selectLastDate = (state: RootState) => state.post.lastDate;