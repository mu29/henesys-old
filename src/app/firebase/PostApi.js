import { loadDB } from './Firebase';

export async function readPostList(tag, last) {
  const db = await loadDB();
  const tagRef = db.collection('tags').doc(tag);

  let query = db.collection('posts')
    .where('tag', '==', tagRef)
    .orderBy('created_at', 'desc')

  if (last) {
    const lastPostRef = await db.collection('posts').doc(last).get();
    query = query.startAfter(lastPostRef);
  }

  return query.limit(20).get()
    .then(snapshot => ({
      posts: snapshot.docs.map(d => ({ id: d.id, ...d.data(), tag })),
    }))
    .catch(error => ({ error }));
}

export async function readPost(id) {
  const db = await loadDB();
  return db.collection('posts').doc(id).get()
    .then(snapshot => ({
      post: {
        id: snapshot.id,
        ...snapshot.doc(),
      },
    }))
    .catech(error => ({ error }));
}
