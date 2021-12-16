import React from 'react';
import '../../ui/Box/box.css';

function Box({ text, link }) {
  return (
    <>
      <div className="box">
        <span className="box__text">
          {text}
          <button className="box__link">{link}</button>
        </span>
      </div>
      <div className="download">
        <span className="download__text">Download.</span>
        <div className="download__image">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png"
            alt=""
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Box;
