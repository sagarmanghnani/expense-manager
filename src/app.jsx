import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Test from './components/test';

const renderApplication = () => {
  ReactDOM.render(
    <Home /> ,
    <Test />,
    document.querySelector('#root')
  );
}

renderApplication(Home);

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}
