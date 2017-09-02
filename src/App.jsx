import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
// eslint-disable-next-line no-unused-vars
import main from './scss/main.scss';


ReactDom.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('app'));
