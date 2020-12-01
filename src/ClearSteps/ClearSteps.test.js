import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ClearSteps from './ClearSteps';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <ClearSteps />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});