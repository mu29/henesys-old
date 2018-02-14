import { loadAuth, loadDB, loadFirebase } from './Firebase';

export async function createComment(postId, content) {
  const db = loadDB();
  const auth = loadAuth();
  const firebase = loadFirebase();

  try {
    const commentRef = await db.collection('comments').add({
      content,
      post: postId,
      user: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      },
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const comment = await commentRef.get();

    const postRef = db.collection('posts').doc(postId);
    const post = await postRef.get();
    await postRef.update({ commentCount: (post.data().commentCount || 0) + 1 });

    return {
      comment: {
        ...comment.data(),
        id: comment.id,
        post: postId,
      },
    };
  } catch (error) {
    return { error };
  }
}

export async function readCommentList(postId) {
  const db = loadDB();

  try {
    const comments = await db.collection('comments')
      .where('post', '==', postId)
      .orderBy('createdAt', 'asc')
      .get();
    return { comments: comments.docs.map(d => ({ id: d.id, ...d.data(), post: postId })) };
  } catch (error) {
    return { error };
  }
}
