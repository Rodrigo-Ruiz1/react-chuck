import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        }
    }

    componentDidMount() {
        //we add the () after calling the function so that it runs immediately
        this._fetchJoke();
    }

    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, async () => {
            const response = await fetch(
                'https://api.chucknorris.io/jokes/random?category=dev'
                ).then(response => response.json());
            // console.log('Response from API is: ', response);
            this.setState({
                joke: response.value,
                isLoading: false
            });
        });
    };

    render() {
        //by deconstructing at the top, you no longer have to call "this.state."
        const { joke, isLoading } = this.state;
        return (
            <>
                <p>{!!isLoading ? "Loading..." : joke}</p>
                <button type="button" onClick={this._fetchJoke}>Get a joke</button>
            </>
        );
    }
}

export default Joke;