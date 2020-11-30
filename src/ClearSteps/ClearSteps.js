import React, {Component} from 'react';
import './ClearSteps.css'
import TrBotContext from '../TrBotContext.js'

class ClearSteps extends Component {
    static contextType = TrBotContext

    handleClick = (callback) => {
      callback()
    }

    render() {
        
        return (
            <div className='ClearSteps'>
              <TrBotContext.Consumer>
                {({clearSteps}) => (
                  <button onClick={() => this.handleClick(clearSteps)}>Clear Steps</button> 
                )}
              </TrBotContext.Consumer>
            </div>
        )
    }

}

export default ClearSteps;