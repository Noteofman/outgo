
require('./bootstrap');

import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';
import Nav from './components/Nav';
import Content from './components/Content';

const App = () => (
  <div>
    <Nav />
    <Content />
  </div>
)

render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));
