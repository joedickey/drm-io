import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TransportSliders from './TransportSliders';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <TransportSliders />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});