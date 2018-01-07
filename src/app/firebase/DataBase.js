import config from './config.json';


export default async function loadDB() {
  const firebase = await import('firebase');

  try {
    firebase.initializeApp(config);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase 초기화 오류', err.stack)
    }
  }

  return firebase;
}
