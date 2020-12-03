import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './LandingPage.css'

class LandingPage extends Component {

    render() {
        return (
            <div className='LandingPage'>
                <h1>Welcome to TR-BOT</h1>
                <div className='LandingPage_intro'>
                    <p>
                    The TR-BOT is a drum machine application that allows a user to create musical percussion tracks in their browser. The TR-BOT's name is inspired by the iconic line of Roland's hardware drum machines (i.e. TR-808, TR-909, TR-606) and by default, the app supplies 6 individual drum sounds that include:
                    </p>
                    <ul>
                        <li>Kick drum (Kick)</li>
                        <li>Snare drum (Snare)</li>
                        <li>High Hat 1 (HH1)</li>
                        <li>High Hat 2 (HH2)</li>
                        <li>Handclap (Clap)</li>
                        <li>Percussion (Perc)</li>
                    </ul>
                    <p>
                    The grid is that of a 16-step sequencer where each square (or step) represents a subdivision of musical time from left to right. The user is encouraged to experiment with building their own unique patterns by clicking any of the steps on or off. 
                    </p>
                    <p>
                    Now let's get to making some music!
                    </p>
                </div>
                    <Link to={'/trbot'}>
                        <button >Start</button>
                    </Link>
            </div>
        )
    }
}

export default LandingPage;