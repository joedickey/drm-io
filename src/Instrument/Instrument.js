import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Instrument.css'
import TrBotContext from '../TrBotContext.js'



class Instrument extends Component {
    static contextType = TrBotContext

    handleClick = (e, value, instrument, callback) => {
        const stepIndex = e.target.id
        callback(stepIndex, value, instrument)
        

    }
   
    render() {
        let currentStep = this.context.currentStep
        const instrument = this.props.instrument
        const steps = this.props.instrumentSteps.map((step, index) => {
            
            if(step === 1){
                return (
                    <TrBotContext.Consumer key={uuidv4()}>
                        {({updateStep}) => (
                            <span key={uuidv4()} className={`step clicked ${currentStep === index ? 'current_step' : ''}`} id={index} value={1} onClick={(e) => this.handleClick(e, 1, instrument, updateStep)}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        )}
                    </TrBotContext.Consumer>
                )
            } else if(step === 0) {
                return (
                    <TrBotContext.Consumer key={uuidv4()}>
                            {({updateStep}) => (
                                <span key={uuidv4()} className={`step ${currentStep === index ? 'current_step' : ''}`} id={index} value={0} onClick={(e) => this.handleClick(e, 0, instrument, updateStep)}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            )}
                        </TrBotContext.Consumer>
                    )
                }
            })
    
        return (
            <div className='Instrument row'>
                {steps}
            </div>
        )
    }
}

export default Instrument;