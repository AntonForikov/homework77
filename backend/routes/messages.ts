import express from 'express';
import {Message} from '../types';
import fileDB from '../fileDB';

const messageRouter = express.Router();

messageRouter.post('/', async (req, res) => {
  const {author, message} = req.body;
  if (message === '' || message === ' ') {
    return res.status(404).json({error: 'Message must be present in the request.'});
  }

  const objToBase: Message = {
    message,
    author,
  };
  const result = await fileDB.addItem(objToBase);
  return res.json(result);
});

messageRouter.get('/', async (req, res) => {
  // const datetime = req.query.datetime as string;
  const messages = await fileDB.getItems();
  // const last30 = messages.slice((messages.length - 30), messages.length);

  // const validDate = new Date(datetime).getDate();

  // if (datetime) {
  //   if (isNaN(validDate)) return res.status(404).json({error: "Date is invalid."});
  //
  //   const filteredMessages = messages.filter((message) => {
  //     if (new Date(message.dateTime) > new Date(datetime)) {
  //       return message;
  //     }
  //   });
  //   return res.json(filteredMessages);
  // }
  return res.json(messages);
});
export default messageRouter;