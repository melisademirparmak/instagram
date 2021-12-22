import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../Post/post.css';
import { BiMessageRounded } from 'react-icons/bi';
import { BiNavigation } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';
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
          <div className="post__nav">
            <div className="post__navDetail">
              <img className="post__navImage" src={posts.user} alt="/" />
              <h3>{posts.name}</h3>
            </div>
            <FiMoreHorizontal />{' '}
          </div>

          <div className="post__imageCenter">
            <img src={posts.imageUrl} className="post__image" alt="/" />
          </div>
          <div className="post__icon">
            <div className="post__iconRight">
              <FaRegHeart size={22} />
              <BiMessageRounded size={22} />
              <BiNavigation size={20} />
            </div>
            <div className="post__iconLeft">
              <BiBookmark size={22} />
            </div>
          </div>

          <div className="post__comment">
            <h3>{posts.name}</h3>
            {posts.comment}
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
