import React, {Component} from 'react';
import './Interface.css'
import Header from '../Header/Header'
import Transport from '../Transport/Transport'
import PatternSelect from '../PatternSelect/PatternSelect'
import Sequencer from '../Sequencer/Sequencer'
import ClearSteps from '../ClearSteps/ClearSteps'



class Interface extends Component {
    
    render() {
        
        return (
            <div className='Interface'>
                <Header />
                <Transport />
                <ClearSteps />
                <Sequencer />
                <PatternSelect />
            </div>
        )
    }
}

export default Interface;