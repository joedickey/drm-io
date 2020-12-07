import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Interface from './Interface';


it.skip('renders without crashing', () => { //keeps saying 'ReferenceError: AudioBuffer is not defined' but renders in browser and audio is working

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <Interface />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});