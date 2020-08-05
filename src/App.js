import React from 'react';
import './assets/css/app.css';
import Home from './components/Home';
import MainContextProvider from './contexts/MainContext'


const App = () => {


  return (
    <div className="App grid  bg-gray-900 px-10">
      <MainContextProvider>
        <Home/>
      </MainContextProvider>
    </div>
  );
}

export default App;
