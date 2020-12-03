import React, {Component} from 'react';
import './Sequencer.css'
import TrBotContext from '../TrBotContext.js'
import Instrument from '../Instrument/Instrument'
import StepTracker from '../StepTracker/StepTracker'


class Sequencer extends Component {
    static contextType = TrBotContext



    render() {

        return (
            <div className='Sequencer'>
                <div className='Sequencer_display'>
                    <div className='Sequencer_channel'>
                        <label>Kick</label>
                        <Instrument instrumentSteps={this.context.kickSteps} instrument='kick' />
                    </div>
                    <div className='Sequencer_channel'>
                        <label>Snare</label>
                        <Instrument instrumentSteps={this.context.snareSteps} instrument='snare' />
                    </div>
                    <div className='Sequencer_channel'>
                        <label>HH1</label>
                        <Instrument instrumentSteps={this.context.hh1Steps} instrument='hh1' />
                    </div>
                    <div className='Sequencer_channel'>
                        <label>HH2</label>
                        <Instrument instrumentSteps={this.context.hh2Steps} instrument='hh2'/>
                    </div>
                    <div className='Sequencer_channel'>
                        <label>Clap</label>
                        <Instrument instrumentSteps={this.context.clapSteps} instrument='clap' />
                    </div>
                    <div className='Sequencer_channel'>
                        <label>Perc</label>
                        <Instrument instrumentSteps={this.context.percSteps} instrument='perc'/>
                    </div>
                </div>
                <div className='StepTracker_channel'>
                        <StepTracker instrumentSteps={this.context.stepTracker} instrument='' />
                </div>
            </div>
        )
    }
}

export default Sequencer;

//<Instrument instrument={instrObj.key} />