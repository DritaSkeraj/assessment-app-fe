import React, { Component } from 'react';
import { FaGreaterThan } from 'react-icons/fa'
import '../styles/Results.css'

class Results extends Component {
    render() {
        return (
            <div>
                <h1 className='heading'>Assessment finished</h1>
                <br/>
                <h5><FaGreaterThan/> Drita Skeraj</h5>
                <br/>
                <h4>Total score: 100/100</h4>
                <br/>
                <h5><FaGreaterThan/> Your answers: </h5>
                <ol>
                <li>correct answer - your answer</li>
                <li>correct answer - your answer</li>
                <li>correct answer - your answer</li>
                <li>correct answer - your answer</li>
                </ol>
            </div>
        );
    }
}

export default Results;