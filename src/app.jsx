import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

var ons = require('onsenui');
var Ons = require('react-onsenui');

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// import Test from './components/test';


class Base extends React.Component {
  render() {
    return(
      <Ons.Page>
        <Ons.Button>Tap me!</Ons.Button>
        <div>
          Hello. All
        </div>
        <Home />
      </Ons.Page>
    );
  }
}

const renderApplication = () => {
  ReactDOM.render(
    <Base />,
    document.querySelector('#root')
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}
