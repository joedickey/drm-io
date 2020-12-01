import React, {Component} from 'react';
import './SavePattern.css'
import {Link} from 'react-router-dom'
import TrBotContext from '../TrBotContext.js'
import ValidateNameEntry from '../ValidateNameEntry/ValidateNameEntry'

class SavePattern extends Component {
    static contextType = TrBotContext

    state = {
        name: '',
        touched: false
    }

    handleSubmit = (event, callback) => {
        event.preventDefault()
        const patternData = {
            "name": event.target.pattern_name.value,
            "user_id": 0,
            "kick_steps": this.context.kickSteps,
            "snare_steps": this.context.snareSteps,
            "hh1_steps": this.context.hh1Steps,
            "hh2_steps": this.context.hh2Steps,
            "clap_steps": this.context.clapSteps,
            "perc_steps": this.context.percSteps
        }
        callback(patternData)
        this.props.history.push('/trbot')
    }

    changeNameState = (event) => {
        this.setState({
            name: event.target.value,
            touched: true
        })
    }

    validateNameEntry() {
        const nameEntry = this.state.name.trim()
        const existingNames = this.context.patterns.map(pattern => pattern.name)
        console.log(existingNames)

        if(nameEntry.length === 0 && this.state.touched) {
            return 'Name is required'
        } else if(existingNames.indexOf(nameEntry) !== -1) {
            return 'This name already exists'
        }

    }

    render() {
        return (
            
            <div className='SavePattern'>
                <h2>Save Pattern:</h2>
                <TrBotContext.Consumer>
                    {({savePattern }) => (
                        <form className='SavePattern_form' onSubmit={(e) => this.handleSubmit(e, savePattern)}>
                            <div className='SavePattern_input'>
                                <label htmlFor='pattern_name'>Pattern Name:</label>
                                <input type='text' id='pattern_name' name='pattern_name' onChange={(e) => this.changeNameState(e)}required/>
                                <ValidateNameEntry message={this.validateNameEntry()}/>
                            </div>
                            <div className='SavePattern_buttons'>
                                <button type='submit' >Submit</button>
                                <Link to={'/trbot'}>
                                    <button>Cancel</button>
                                </Link>
                            </div>   
                        </form>
                    )}
                </TrBotContext.Consumer>
            </div>
        )
    }
}

export default SavePattern;