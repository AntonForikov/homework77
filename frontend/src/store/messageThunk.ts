import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Message} from '../types';

export const getLastPostDate = createAsyncThunk(
  'lastPostData/get',
  async () => {
    try {
      const {data} = await axiosApi.get<Message[] | undefined>('/messages');
      if (data) {
        return data.reverse();
      }
    } catch (e) {
      console.error(e);
    }
  }
);

// export const getTargetPosts = createAsyncThunk(
//   'targetPosts/get',
//   async (date: string) => {
//     try {
//       const {data: lastData} = await axiosApi.get<MessageWithIdAndDate[] | undefined>(`/messages?datetime=${date}`);
//       if (lastData) return lastData.reverse();
//     } catch (e) {
//       console.error(e);
//     }
//   }
// );