import { loadDB, loadAuth, loadFirebase } from './Firebase';

export async function register(email, password, name) {
  const db = loadDB();
  const auth = loadAuth();
  const firebase = loadFirebase();

  try {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const user = await auth.createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: name });
    await db.collection('users').doc(user.uid).set({
      email: user.email,
      name: user.displayName,
    });
    return {
      user: {
        email,
        name,
      },
    };
  } catch (error) {
    return { error };
  }
}

export async function login(email, password) {
  const db = loadDB();
  const auth = loadAuth();
  const firebase = loadFirebase();

  try {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const userInfo = await auth.signInWithEmailAndPassword(email, password);
    const user = await db.collection('users').doc(userInfo.uid).get();
    return { user: user.data() };
  } catch (error) {
    return { error };
  }
}
