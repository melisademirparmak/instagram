import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/home.css';
import Snapshot from '../Snapshot/Snapshot';
// import Post from '../Post/Post';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
        <div className="feed">
          <Snapshot />
          {/* <Post /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
