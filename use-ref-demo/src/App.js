import React from 'react';
import FocusableInput from './FocusableInput';
import UncontrolledInput from './UncontrolledInput';
import InteractiveElement from './InteractiveElement';

const App = () => {
  return (
    <div>
      <h1>Exploring useRef Hook in React</h1>
      <FocusableInput />
      <UncontrolledInput />
      <InteractiveElement />
    </div>
  );
};

export default App;
