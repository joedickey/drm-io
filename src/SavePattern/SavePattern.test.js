import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SavePattern from './SavePattern';


it('renders without crashing', () => {

    const div = document.createElement('div');
    
  ReactDOM.render(
  <Router>
    <SavePattern />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});