import React, {Component} from 'react';
import './CreateAccount.css'
import {Router,Link} from 'react-router-dom'


class CreateAccount extends Component {

    render() {
        return(
            <div className='CreateAccount'>
                <h1>Create Account:</h1>
                <form className='CreateAccount_form'>
                    <div className='CreateAccount_input'>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' id='username' name='username'/>
                    </div>
                    <div className='CreateAccount_input'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' name='password'/>
                    </div>
                    <div className='CreateAccount_input'>
                        <label htmlFor='confirm_password'>Confirm Password:</label>
                        <input type='password' id='confirm_password' name='confirm_password'/>
                    </div>
                    <div className='CreateAccount_buttons'>
                        <Link to={'/'}>
                            <button type='submit'>Submit</button>
                        </Link>
                        <Link to={'/'}>
                            <button>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateAccount;