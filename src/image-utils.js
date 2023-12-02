import React, { useRef, useEffect } from 'react';


const ImageEffectComponent = ({ imagePath }) => {
  const portraitRef = useRef(null);

  useEffect(() => {
    const mouseMonitor = (e) => {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      let moveX = x > 0.5 ? '-15px' : '15px';
      let moveY = y > 0.5 ? '-10px' : '10px';
      portraitRef.current.style.setProperty("--translate-x", moveX);
      portraitRef.current.style.setProperty("--translate-y", moveY);
    };

    const portrait = portraitRef.current;
    portrait.addEventListener("mousemove", mouseMonitor);

    return () => {
      portrait.removeEventListener("mousemove", mouseMonitor);
    };
  }, []);

  return (
    <div className="portrait" ref={portraitRef}>
      <div className="fill">
        <div className="fill cover-img" style={{ backgroundImage: `url(${imagePath})` }}></div>
      </div>
      <div className="fill z-10 hover">
        <div className="fill cover-img hover-img" style={{ backgroundImage: `url(${imagePath})` }}></div>
      </div>
    </div>
  );
};

export default ImageEffectComponent;
