import * as firebase from 'firebase';
import 'firebase/firestore';
import config from './config.json';

function initFirebase() {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase 초기화 오류', err.stack);
    }
  }
}

export function loadDB() {
  initFirebase();
  return firebase.firestore();
}

export function loadAuth() {
  initFirebase();
  return firebase.auth();
}

export function loadFirebase() {
  initFirebase();
  return firebase;
}
