import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
   
    //takes the place of the constructor method with props and super with props
    state = { lat: null, errorMessage: ''};


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );    
    }

    componentDidUpdate() {
        console.log('My component JUST updated - it rerendered!')
    }
    
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.lat}</div>
        }
//take state and pass it as a prop down to a child
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));


//NOTES-----------------------------
// STATE: is a js object that contains some amount of data relevent 
// to a single component

// updating State Causes immediate rerender

// State property can only be udpdated using the function setState
