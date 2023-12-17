import React, { useRef, useEffect } from 'react';


const ImageEffectComponent = ({ imagePath, isMobile }) => {
  const portraitRef = useRef(null);
  const distanceMovementX = isMobile ? "10px" : "15px";
  const distanceMovementY = isMobile ? "7px" : "10px"
   
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
