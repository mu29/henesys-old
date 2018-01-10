import loadDB from './DataBase';

export async function readMenus() {
  const db = await loadDB();
  return db.collection('menus').get()
    .then(snapshot => ({
      menus: snapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .sort((p, c) => p.index - c.index)
    }))
    .catch(error => ({ error }));
}

export async function readSubMenus(menu) {
  const db = await loadDB();
  return db.collection('menus').doc(menu).collection('submenus').get()
    .then(snapshot => ({
      submenus: snapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .sort((p, c) => p.index - c.index)
    }))
    .catch(error => ({ error }));
}
