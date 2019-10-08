import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyled from './styled/GlobalStyled';
import Header from './Components/Header/index';
import store from './store/index';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyled />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
