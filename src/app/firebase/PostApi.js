import { loadAuth, loadDB } from './Firebase';

export async function createPost(title, content, tag) {
  const auth = await loadAuth();
  const db = loadDB();
  const userRef = db.collection('users').doc(auth.currentUser);

  try {
    const postRef = await db.collection('posts').add({
      title,
      content,
      tag,
      user: userRef,
      createdAt: db.ServerValue.TIMESTAMP,
    });
    const post = await postRef.get();
    return {
      post: {
        id: post.id,
        ...post.doc(),
      },
    };
  } catch (error) {
    return { error };
  }
}

export async function readPostList(tag, last) {
  const db = await loadDB();
  const tagRef = db.collection('tags').doc(tag);

  let query = db.collection('posts')
    .where('tag', '==', tagRef)
    .orderBy('createdAt', 'desc');

  if (last) {
    const lastPostRef = await db.collection('posts').doc(last).get();
    query = query.startAfter(lastPostRef);
  }

  try {
    const posts = await query.limit(20).get();
    return { posts: posts.docs.map(d => ({ id: d.id, ...d.data(), tag })) };
  } catch (error) {
    return { error };
  }
}

export async function readPost(id) {
  const db = await loadDB();
  try {
    const post = await db.collection('posts').doc(id).get();
    return {
      post: {
        id: post.id,
        ...post.doc(),
      },
    };
  } catch (error) {
    return { error };
  }
}
