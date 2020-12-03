import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StepTracker from './StepTracker';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <StepTracker />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});