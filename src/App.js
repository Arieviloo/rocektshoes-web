import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyled from './styled/GlobalStyled';
import Header from './Components/Header/index';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyled />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
