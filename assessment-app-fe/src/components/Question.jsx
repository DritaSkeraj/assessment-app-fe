import React, { Component } from 'react';
import '../styles/Question.css'
import SingleQuestion from './SingleQuestion';
import {ImArrowRight} from 'react-icons/im';

class Question extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                  <h5>Question 1/5</h5>
                </div>
                <div className='question-holder'>
                  <SingleQuestion/>
                </div>
                <ImArrowRight className='arrow'/>
            </div>
        );
    }
}

export default Question;