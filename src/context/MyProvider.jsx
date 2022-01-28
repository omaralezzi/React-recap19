import { useState, useRef } from 'react';

import MyContext from './MyContext';

const MyProvider = (props) => {
  const [count, setCount] = useState(0);
  const appHeading = useRef('Context API');

  return (
    <MyContext.Provider value={{ count, setCount, appHeading }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
