import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyled from './styled/GlobalStyled';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
