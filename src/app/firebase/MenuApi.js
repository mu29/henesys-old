import loadDB from './DataBase';

export async function readMenus() {
  const db = await loadDB();
  return db.collection('menus').get()
    .then(snapshot => ({
      menus: snapshot.docs
        .map(d => d.data())
        .sort((p, c) => p.index - c.index)
    }))
    .catch(error => ({ error }));
}
