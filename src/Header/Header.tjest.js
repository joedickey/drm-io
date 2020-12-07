import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';


it('renders without crashing', () => { //keeps saying 'ReferenceError: AudioBuffer is not defined' but renders in browser and audio is working

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <Header />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});