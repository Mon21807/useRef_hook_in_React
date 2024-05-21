import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus on mount" />
    </div>
  );
};

export default FocusableInput;
