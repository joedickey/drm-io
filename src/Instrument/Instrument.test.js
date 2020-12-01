import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Instrument from './Instrument';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {

  const div = document.createElement('div');

  const steps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const wrapper = shallow(<Instrument  instrumentSteps={steps}/>)

  ReactDOM.render(
  <Router >
    {wrapper}
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});