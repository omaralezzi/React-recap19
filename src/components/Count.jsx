import { useContext } from 'react';

import MyContext from '../context/MyContext';

const Count = () => {
  const context = useContext(MyContext);
  const { count } = context;

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Count;
