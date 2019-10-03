import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyled from './styled/GlobalStyled';
import Header from './Components/Header/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
