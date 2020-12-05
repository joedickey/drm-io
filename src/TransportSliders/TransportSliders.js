import React, {Component} from 'react';
import './TransportSliders.css'
import TrBotContext from '../TrBotContext.js'

class TransportSliders extends Component {
    static contextType = TrBotContext

    handleChange = (e, callback) => {
        callback(e.target.value)
    }

    render() {
        const volume = this.context.volume
        const bpm = this.context.bpm

        return (
            <div className='TransportSliders'>
                <TrBotContext.Consumer>
                    {({updateBpm, updateVolume}) => (
                        <>
                        <label htmlFor="volume">Volume: {volume}</label>
                        <input type="range" id="volume" className="slider" name="volume" min="0" max="100" defaultValue={100} onChange={(e) => this.handleChange(e, updateVolume)}/>  
                        <label htmlFor="bpm">BPM: {bpm}</label>
                        <input type="range" id="bpm" className="slider" name="bpm" min="40" max="300" defaultValue={120}  onChange={(e) => this.handleChange(e, updateBpm)}/>
                        </>
                    )}
                </TrBotContext.Consumer>
            </div>
        )
    }

}

export default TransportSliders;