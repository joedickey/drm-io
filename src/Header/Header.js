import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <header>
                    <Link to={'/trbot'}>
                        <h1>TR-BOT</h1>
                    </Link>
                     <button>
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