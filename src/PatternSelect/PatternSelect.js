import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './PatternSelect.css'
import TrBotContext from '../TrBotContext.js'

class PatternSelect extends Component {
    static contextType = TrBotContext

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

    render() {
        let patternOptions = this.context.patterns.map((pattern, index) => {
            return(
            <option name={pattern.name} value={index} key={pattern.id}>{pattern.name}</option>
            )
        })

        return (
            <div className='PatternSelect'>
                <TrBotContext.Consumer>
                    {({updatePatternSelect}) => (
                        <>
                         <label htmlFor="pattern">Pattern:</label>
                         <select id="pattern" name="pattern" onChange={(e) => this.handleChange(e, updatePatternSelect)}>
                             {patternOptions}
                         </select>
                         <Link to={'savepattern'}>
                            <button className='PatternSelect_button'>Save</button>
                         </Link>
                            <button className='PatternSelect_button'>Delete</button>
                        </>
                    )} 
                </TrBotContext.Consumer>
            </div>
        )
    }
}

export default PatternSelect;