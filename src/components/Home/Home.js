import React from 'react';
import Navbar from '../Navbar/Navbar';
// import Post from '../Post/Post';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="feed">{/* <Post /> */}</div>
      </div>
    </div>
  );
}

export default Home;
