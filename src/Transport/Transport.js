import React, {Component} from 'react';
import TransportControls from '../TransportControls/TransportControls';
import TransportSliders from '../TransportSliders/TransportSliders';

class Transport extends Component {

    render() {
        return (
            <div className='Transport'>
                <TransportControls />
                <TransportSliders />
            </div>
        )
    }

}

export default Transport;