import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './StepTracker.css'
import TrBotContext from '../TrBotContext.js'



class StepTracker extends Component {

    render() {
        return (
            <div className='StepTracker'>
                <span key={uuidv4()} className={`tracker first`}>1</span>
                <span key={uuidv4()} className={`tracker second`}>5</span>
                <span key={uuidv4()} className={`tracker third`}>9</span>
                <span key={uuidv4()} className={`tracker fourth`}>13</span>
            </div>
        )
    }
}

export default StepTracker;




