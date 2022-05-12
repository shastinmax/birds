import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDxXhnPsXBnlCwo87ahahIj8WNbmRvMlvE',
//   authDomain: 'auth-8f28a.firebaseapp.com',
//   projectId: 'auth-8f28a',
//   storageBucket: 'auth-8f28a.appspot.com',
//   messagingSenderId: '236519740990',
//   appId: '1:236519740990:web:a49b198ac7789bf368636f',
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
