import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ValidateNameEntry from './ValidateNameEntry';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <ValidateNameEntry />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});