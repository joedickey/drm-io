import React, {Component} from 'react';
import './SavePattern.css'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import TrBotContext from '../TrBotContext.js'

class SavePattern extends Component {
    static contextType = TrBotContext


    render() {
        return (
            
            <div className='SavePattern'>
                <h2>Save Pattern:</h2>
                <form className='SavePattern_form'>
                    <div className='SavePattern_input'>
                        <label htmlFor='pattern_name'>Pattern Name:</label>
                        <input type='text' id='pattern_name' name='pattern_name'/>
                    </div>
                    <div className='SavePattern_buttons'>
                        <Link to={'/trbot'}>
                            <button type='submit'>Submit</button>
                        </Link>
                        <Link to={'/trbot'}>
                            <button>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SavePattern;