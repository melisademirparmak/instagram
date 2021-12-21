import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../Post/post.css';
import { BiMessageRounded } from 'react-icons/bi';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection('post').onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      {post.map((posts) => (
        <div className="post">
          <div className="post__name">
            {posts.name}
            <FiMoreHorizontal />{' '}
          </div>
          <div className="post__imageCenter">
            <img src={posts.imageUrl} className="post__image" alt="/" />
          </div>
          <div className="post__icon">
            <FaRegHeart size={23} />
            <BiMessageRounded size={23} />
            <RiCompassDiscoverLine size={23} />
          </div>

          <div className="post__comment">{posts.comment}</div>
        </div>
      ))}
    </>
  );
};

export default Post;
