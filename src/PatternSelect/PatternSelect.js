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
        Tone.Transport.stop() //stop playback
        Tone.Transport.cancel()
        allSampler.disconnect()
   
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
                         <select id="pattern" name="pattern" value={this.context.patternSelect === null ? '' : this.context.patternSelect} onChange={(e) => this.handleChange(e, updatePatternSelect)}>
                            {placeHolder(this.context.currentPatternId)}
                            {patternOptions}
                         </select>
                         <Link to={'savepattern'}>
                            <button className='PatternSelect_button' onClick={() => this.stopPlayback()}>Save</button>
                         </Link>
                    <button className='PatternSelect_button' onClick={() => this.handleClick(deletePattern)}>Delete</button>
                        </>
                    )} 
                </TrBotContext.Consumer>
            </div>
        )
    }
}

export default PatternSelect;