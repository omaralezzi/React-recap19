import { useContext } from 'react';

import Count from './components/Count';
import Counter from './components/Counter';

import MyContext from './context/MyContext';

import './App.css';

const App = () => {
  const context = useContext(MyContext);
  console.log(context);
  const { appHeading } = context;

  return (
    <main>
      <h1>{appHeading.current}</h1>
      <Count />
      <Counter />
    </main>
  );
};

export default App;
