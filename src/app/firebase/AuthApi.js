import { loadAuth } from './DataBase';

export async function register(email, password, name) {
  const auth = await loadAuth();

  return auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      auth.currentUser.updateProfile({ displayName: name });
      return {
        user: {
          email,
          name,
        },
      };
    })
    .catch(error => ({ error }));
}

export async function login(email, password) {
  const auth = await loadAuth();

  return auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = auth.currentUser;
      return {
        user: {
          email: user.email,
          name: user.displayName,
        },
      };
    })
    .catch(error => ({ error }));
}
