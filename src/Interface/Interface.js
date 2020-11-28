import React, {Component} from 'react';
import './Interface.css'
import Header from '../Header/Header'
import Transport from '../Transport/Transport'
import PatternSelect from '../PatternSelect/PatternSelect'
import Sequencer from '../Sequencer/Sequencer'



class Interface extends Component {
    
    render() {
        
        return (
            <div className='Interface'>
                <Header />
                <Transport />
                <Sequencer />
                <PatternSelect />
            </div>
        )
    }
}

export default Interface;