import React, {Component} from 'react';
import './TransportControls.css'
import TrBotContext from '../TrBotContext.js'

class TransportControls extends Component {
    static contextType = TrBotContext

    handleClick = (callback) => {
      callback()
    }

    render() {
        
        return (
            <div className='TransportControls'>
              <TrBotContext.Consumer>
                {({playSequencer, stopSequencer}) => (
                  <>
                  <button onClick={() => this.handleClick(playSequencer)}>Play</button>
                  <button onClick={() => this.handleClick(stopSequencer)}>Stop</button>
                  </>
                )}
              </TrBotContext.Consumer>
            </div>
        )
    }

}

export default TransportControls;