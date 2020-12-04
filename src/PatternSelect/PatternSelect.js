import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './PatternSelect.css'
import * as Tone from 'tone'
import { v4 as uuidv4 } from 'uuid';
import TrBotContext from '../TrBotContext.js'
import {allSampler} from '../samplers.js'

class PatternSelect extends Component {
    static contextType = TrBotContext

    handleChange = (e, callback) => {
        this.stopPlayback()
   
        const index = e.target.value
        const id = this.context.patterns[index].id

        callback(index, id)
    }

    handleClick = (callback) => {
        const id = this.context.currentPatternId
        console.log(callback)
        callback(id)
    }

    stopPlayback = () => {
        Tone.Transport.stop() 
        Tone.Transport.cancel()
        allSampler.disconnect()
    }

    render() {
        function placeHolder(id) { //conditional placeholder option when no saved patterns exist
            if(id === null) {
                return (
                    <option value="" key='xxx' hidden>New Pattern</option>
                )
            }
        }
        let patternOptions = this.context.patterns.map((pattern, index) => {
            return(
            <option name={pattern.name} value={index} key={uuidv4()}>{pattern.name}</option>
            )
        })

        return (
            <div className='PatternSelect'>
                <TrBotContext.Consumer>
                    {({updatePatternSelect, deletePattern}) => (
                        <>
                         <label htmlFor="pattern">Pattern:</label>
                         <select id="pattern" name="pattern" value={this.context.patternSelect === null ? '' : this.context.patternSelect} disabled={this.context.currentStep != null} onChange={(e) => this.handleChange(e, updatePatternSelect)}>
                            {placeHolder(this.context.currentPatternId)}
                            {patternOptions}
                         </select>
                         
                    <button className='PatternSelect_button' onClick={() => this.stopPlayback()}>
                        <Link to={'savepattern'}>Save</Link>
                    </button>   
                    <button className='PatternSelect_button' disabled={this.context.currentPatternId === null} onClick={() => this.handleClick(deletePattern)}>Delete</button>
                        </>
                    )} 
                </TrBotContext.Consumer>
            </div>
        )
    }
}

export default PatternSelect;