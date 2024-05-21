import React, { useRef } from 'react';

const InteractiveElement = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor =
        divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    }
  };

  return (
    <div
      ref={divRef}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
      onClick={handleClick}
    >
      Click me to change my color!
    </div>
  );
};

export default InteractiveElement;
