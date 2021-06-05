import { SEND_MESSAGE } from "../actionTypes";
import client from '../../services/sockets'

const initialState = {
  messageChat: ''
};

 const MessageReducer = async(state = initialState, action:any) => {
   switch (action.type) {
     case SEND_MESSAGE: {
       const { content } = action.payload;
       await client.sendMessage(content)
       return
      // client.on('output', (output) => {
      //   // eslint-disable-next-line no-console
      //   console.log('hhh',output);
      //   if (output.data !== null) {
      //    return { ...state, messageChat : 'wemove' }
      //   }
      // });
      // return () => {
      //   // eslint-disable-next-line no-console
      //   console.log('disconnect');
      //   client.disconnect();
      // };
    }
    default:
      return state;
  }
 }

 export default MessageReducer
