import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component{
    constructor(props){
        super(props) 
        

        this.state={latitude:null, longitude:null, errorMessage:''}

       

    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position)
                this.setState({latitude:position.coords.latitude})
                this.setState({longitude:position.coords.longitude})
            },
            (error)=> {
                this.setState({errorMessage:error.message})
            }
        )

    }
    render() {
        
        if(this.state.errorMessage && !this.latitude){
            return <div>{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage&&this.state.latitude) {
            return(
            <div>
                <HemisphereDisplay latitude={this.state.latitude}></HemisphereDisplay>
            </div>)
        }
        else{
           return <div>loading...</div>
        }
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
)