import React, { Component } from 'react';
import '../styles/Welcome.css';
import {ImArrowRight} from 'react-icons/im'
import {Link} from 'react-router-dom';

class Welcome extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            error: '',
            isCompleted: false,
            assessmentName: 'benchmark assessment',
            totalDuration: 1800
        }

        this.inputOnChange = this.inputOnChange.bind(this);
    }

    async inputOnChange(event) {
        let name = '';
        if(!event.target.value) {
            return;
        } else {
            name += event.target.value;
            this.setState({name: name});
        }
    }

    postExam = async () => {
        try{
        const res = await fetch('http://127.0.0.1:3000/exams/start', {
          method: 'POST',
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({
              "candidateName": this.state.name,
              "isCompleted": this.state.isCompleted,
              "name": this.state.assessmentName,
              "totalDuration": this.state.totalDuration
          })
        });
        const content = await res.json();
        console.log(content);
        } catch(e){
            console.log("error::::::::::::", e)
        }
      
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
                    <input type='text' 
                      value={this.state.name} 
                      onChange={this.inputOnChange}/>
                    <Link to={'/question'}>
                        <ImArrowRight className='home-arrow' 
                        onClick={this.postExam}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Welcome;