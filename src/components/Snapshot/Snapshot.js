import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import '../Snapshot/snapshot.css';

function Snapshot() {
  const [snapshot, setsnapShot] = useState([]);
  useEffect(() => {
    db.collection('image').onSnapshot((snapshot) => {
      setsnapShot(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="snapshot">
      {snapshot.map((snapshots) => (
        <div className="snapshot__detail">
          <img src={snapshots.image} className="snapshot__image" alt="/" />
          <span className="snapshot__text">{snapshots.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Snapshot;
