import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCyROqwvVxBN7ve6G0EOOcJDGKXOJ3ZV6Q",
    authDomain: "chat-web-app-a4def.firebaseapp.com",
    projectId: "chat-web-app-a4def",
    storageBucket: "chat-web-app-a4def.appspot.com",
    messagingSenderId: "1071732006554",
    appId: "1:1071732006554:web:4cb08f8454161fe3fe8923"
  };

  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();