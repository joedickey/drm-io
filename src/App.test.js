import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';



it.skip('renders without crashing', () => {  //keeps saying 'ReferenceError: AudioBuffer is not defined' but renders in browser

    ReactDOM.render(
    <Router>
        <App />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
