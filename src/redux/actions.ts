import { SEND_MESSAGE } from "./actionTypes";


export const sendMessage = (content: any) => ({
  type: SEND_MESSAGE,
  payload: {
    content
  }
});