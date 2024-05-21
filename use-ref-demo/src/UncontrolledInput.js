import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something"
        onChange={handleInputChange}
      />
      <p>Current Value: {inputRef.current ? inputRef.current.value : ''}</p>
    </div>
  );
};

export default UncontrolledInput;
