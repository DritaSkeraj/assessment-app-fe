import React, { Component } from 'react';
import '../styles/Welcome.css';
import {ImArrowRight} from 'react-icons/im'
import {Link} from 'react-router-dom';

class Welcome extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <div className='welcome-lines'>
                    <h1>Welcome to this benchmark test!</h1>
                    <p><em>Good Luck!</em></p>
                </div>
                <div className='name-input'>
                    <h3>Write your name here:</h3>
                    <input type='text' />
                    <Link to={'/question'}>
                        <ImArrowRight className='home-arrow'/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Welcome;