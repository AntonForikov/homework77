import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';

interface Props {
  message: string,
  author: string,
}

const MessageItem: React.FC<Props> = ({message, author}) => {

  return (
    <Paper elevation={5} sx={{padding: 3, marginY: 2}}>
      <Grid container direction='column'>
        <Typography>Author: {author}</Typography>
        <Typography>Message: {message}</Typography>
        {/*<Grid item direction='column'>*/}
        {/*  */}
        {/*</Grid>*/}
      </Grid>
    </Paper>
  );
};

export default MessageItem;