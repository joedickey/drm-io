import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PattternSelect from './PatternSelect';


it('renders without crashing', () => { //keeps saying 'ReferenceError: AudioBuffer is not defined' but renders in browser

  const div = document.createElement('div');
  
  AudioBuffer()

  ReactDOM.render(
  <Router>
    <PattternSelect />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});