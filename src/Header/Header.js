import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import * as Tone from 'tone'
import {allSampler} from '../samplers.js'

class Header extends Component {

    handleClick = () => {
        Tone.Transport.stop() 
        Tone.Transport.cancel()
        allSampler.disconnect()
    }

    render() {
        return (
            <div className='Header'>
                <header>
                    <Link to={'/trbot'}>
                        <h1>TR-BOT</h1>
                    </Link>
                     <button onClick={() => this.handleClick()}>
                        <Link to={'/'}>
                            Log Out
                        </Link>
                    </button>
                </header>
            </div>
        )
    }
}

export default Header;