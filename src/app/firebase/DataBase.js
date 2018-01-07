import * as firebase from 'firebase';
import 'firebase/firestore';
import config from './config.json';

export default async function loadDB() {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase 초기화 오류', err.stack)
    }
  }

  return firebase.firestore();
}
