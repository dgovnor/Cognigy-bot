import {SocketClient} from '@cognigy/socket-client'

const ENDPOINT_URL = 'https://endpoint-trial.cognigy.ai';
const URL_TOKEN = 'ce5c41bdbd3cc71fbb81b0f192e46c9b1f306988cc03d9bc5a348ad96d249aba';
const client = new SocketClient(ENDPOINT_URL, URL_TOKEN, {
    // if you use node, internet explorer or safari, you need to enforce websockets
    forceWebsockets: true,
  });
  

export default client