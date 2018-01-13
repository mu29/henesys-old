import { loadDB, loadAuth } from './Firebase';

export async function register(email, password, name) {
  const db = await loadDB();
  const auth = await loadAuth();

  try {
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
  const db = await loadDB();
  const auth = await loadAuth();

  try {
    const userInfo = await auth.signInWithEmailAndPassword(email, password);
    const user = await db.collection('users').doc(userInfo.uid).get();
    return { user: user.data() };
  } catch (error) {
    return { error };
  }
}
