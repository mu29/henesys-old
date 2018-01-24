import { loadAuth, loadDB, loadFirebase } from './Firebase';

export async function createPost(tag, title, content) {
  const db = loadDB();
  const auth = loadAuth();
  const firebase = loadFirebase();

  try {
    const tagRef = db.collection('tags').doc(tag);
    const userRef = db.collection('users').doc(auth.currentUser.uid);
    const postRef = await db.collection('posts').add({
      title,
      content,
      tag: tagRef,
      user: userRef,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const post = await postRef.get();
    return {
      post: {
        ...post.data(),
        id: post.id,
        tag,
      },
    };
  } catch (error) {
    return { error };
  }
}

export async function readPostList(tag, last) {
  const db = loadDB();

  try {
    let query = db.collection('posts');

    if (tag) {
      const tagRef = db.collection('tags').doc(tag);
      query = query.where('tag', '==', tagRef);
    }

    query = query.orderBy('createdAt', 'desc');

    if (last) {
      const lastPostRef = await db.collection('posts').doc(last).get();
      query = query.startAfter(lastPostRef);
    }

    const posts = await query.limit(20).get();
    return { posts: posts.docs.map(d => ({ id: d.id, ...d.data(), tag })) };
  } catch (error) {
    return { error };
  }
}

export async function readPost(id) {
  const db = loadDB();
  try {
    const post = await db.collection('posts').doc(id).get();
    return {
      post: {
        id: post.id,
        ...post.data(),
      },
    };
  } catch (error) {
    return { error };
  }
}
