import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Message, MessageWithId} from '../types';

export const sendMessage = createAsyncThunk(
  'sendMessages/post',
  async (message: Message) => {
    try {
      await axiosApi.post<MessageWithId | undefined>('/messages', message);
    } catch (e) {
      console.error(e);
    }
  }
);
export const getMessages = createAsyncThunk(
  'getMessages/get',
  async () => {
    try {
      const {data} = await axiosApi.get<MessageWithId[] | undefined>('/messages');
      if (data) {
        return data.reverse();
      } else {
        return [];
      }
    } catch (e) {
      console.error(e);
    }
  }
);