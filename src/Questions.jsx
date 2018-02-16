import React, { Component } from 'react';


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    "number": 1,
                    "content": "test1",
                    "answer": null,
                    "validate": null
                },
                {
                    "number": 2,
                    "content":"test2",
                    "answer": null,
                    "validate": null
                },
                {
                    "number": 3,
                    "content":"test3",
                    "answer": null,
                    "validate": null
                }
            ],
            correctAnswers: 0,
            currentQuestion: 0,
            userEmail: 'default@test.com',
            userName: '',
            consent: ''
        };
    }




    updateAnswer1(update) {
        this.setState({qOneAnswer: update.target.value});
    }

    updateAnswer2(update) {
        this.setState({qTwoAnswer: update.target.value});
    }

    updateEmail(update) {
        this.setState({userEmail: update.target.value});
    }

    updateName(update) {
        this.setState({userName: update.target.value});
    }

    render() {
        return (
            <div>
                { this.state.currentQuestion === 0
                    ? <Landing
                        userEmail = {this.state.userEmail}
                        updateEmail = {handle => this.updateEmail(handle)}
                        />
                    : null
                }
                { this.state.currentQuestion === 1
                    ? <Question1 updateAnswer1 = {update => this.updateAnswer1(update)} />
                    : null
                }
                { this.state.currentQuestion === 2
                    ? <Question2 updateAnswer2 = {update => this.updateAnswer2(update)} />
                    : null
                }
                <div className="button-row">
                    <button className="next-q-button" type="button" onClick = {() => this.setState({currentQuestion: this.state.currentQuestion + 1})}>Next Question <i className="fa fa-chevron-right"></i></button>
                </div>
            </div>
        );
    }
}

function Landing(props) {
    return (
        <div>
            <h2 className="central-block gutter-bottom-30">Please fill out the form to get started! </h2>
            <div className="central-block">
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="nameInput">Name: </label>
                    <input className="font16" id="nameInput" type="text" name="userName" onChange={props.updateName} value={props.userName}/>
                </div>
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="emailInput">Email: </label>
                    <input className="font16" id="emailInput" type="email" name="userEmail" onChange={props.updateEmail} value={props.userEmail}/>
                </div>
                <div className="gutter-bottom-10">
                    <label className="font16" htmlFor="consent">Are you happy for us to use your details and answers to contact you about opportunities at Age Partnership? </label>
                    <input className="font16" id="consent" type="checkbox" name="consent" onChange={props.updateSt} />
                </div>
            </div>
        </div>
    );
}

function Question1(props) {
    return (
        <div>
            <h2 className="question-title">Question 1: THIS IS QUESTION ONE</h2>
                <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">Yes</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer1}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">Maybe</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer1}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">Yes3</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer1}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">No!</label>
                    <input
                        id="answer-four"
                        type="radio"
                        name="answer"
                        value="4"
                        onChange={props.updateAnswer1}
                    />
                </div>
            </div>
        </div>
    );
}

function Question2(props) {
    return (
        <div>
            <h2 className="question-title">Question 2: Test Q2 </h2>
            <div className="answer-block">
                <div className="answer-option">
                    <label htmlFor="answer-one">Yes</label>
                    <input
                        id="answer-one"
                        type="radio"
                        name="answer"
                        value="1"
                        onChange={props.updateAnswer2}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-two">Maybe</label>
                    <input
                        id="answer-two"
                        type="radio"
                        name="answer"
                        value="2"
                        onChange={props.updateAnswer2}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-three">Yes3</label>
                    <input
                        id="answer-three"
                        type="radio"
                        name="answer"
                        value="3"
                        onChange={props.updateAnswer2}
                    />
                </div>
                <div className="answer-option">
                    <label htmlFor="answer-four">No!</label>
                    <input
                        id="answer-four"
                        type="radio"
                        name="answer"
                        value="4"
                        onChange={props.updateAnswer2}
                    />
                </div>
            </div>
        </div>
    );
}

export default Questions;












