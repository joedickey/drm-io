import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Transport from './Transport';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <Transport />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});