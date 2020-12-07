import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';



it('renders without crashing', () => {  //keeps saying 'ReferenceError: AudioBuffer is not defined' but renders in browser and audio is working

    const div = document.createElement('div');


    ReactDOM.render(
    <Router>
        <App />
    </Router>, div);
    
    ReactDOM.unmountComponentAtNode(div);
});
