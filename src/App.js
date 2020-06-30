import React from 'react';
import './App.css';
import Shop from './containers/Shop/Shop';
import Header from './components/Header/Header';

const App = (props) => {
  return (
    <div className='App'>
      <Header/>
      <Shop />
    </div>
  );
};

export default App;
