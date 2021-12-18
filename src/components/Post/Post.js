import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection('post').onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="container">
      {post.map((posts) => (
        <>
          <div className="post__name">{posts.name}</div>
          <img src={posts.imageUrl} className="post__image" />
          <div className="post__comment">{posts.comment}</div>
        </>
      ))}
    </div>
  );
};

export default Post;
