import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sequencer from './Sequencer';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <Sequencer />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});