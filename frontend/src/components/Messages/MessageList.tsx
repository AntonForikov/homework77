import {useEffect} from 'react';
import {Alert, CircularProgress, Grid} from '@mui/material';
import MessageItem from './MessageItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectLoading, selectMessageList} from '../../store/messageSlice';

const MessageList = () => {
  const messageList = useAppSelector(selectMessageList);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();


  useEffect(() => {
    // dispatch(getLastPostDate());
  }, [dispatch]);

  return (
    <>
      <MessageItem
        message='test MSG'
        author='Test Author'
      />
      {loading
        ? <Grid container justifyContent='center' mt={2}><CircularProgress /></Grid>
        : !loading && messageList.length > 0
          ? messageList.map((message) => {
            return <MessageItem
              key={crypto.randomUUID()}
              message={message.message}
              author={message.author}
            />;
          })
          : <Alert severity="warning" sx={{marginTop: 2}}>There are no messages. Write something!</Alert>
      }
    </>
  );
};

export default MessageList;