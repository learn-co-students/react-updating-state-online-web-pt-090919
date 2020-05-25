// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor(){
    super()
    this.state = {
      hasBeenClicked: false
    };
  }
  
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
   }, () => console.log(this.state.hasBeenClicked))
  }
  
  // handleClick = () => {
  // this.setState(previousState => {
  //   return {count: previousState + 1}
  // })
  // }
  
  // handleClick = () => {
  //   this.setState(previousState => {
  //     return {
  //       toggled: !previousState.toggled // inversion, toggling between true and false if this.state.toggled: true or false
  //     }
  //   })
  // }
  
  // this.setState({
  //   addressInfo: Object.assign({}, this.state.addressInfo, {
  //     city: 'New York City'
  //   })
  // })
  
  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo, city: 'New York City'
  //   }
  // })
  
  render() {
    return (
    <div>
    <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
    <button onClick={this.handleClick}>Click me!</button>
    </div>  
    )
  }
}

export default ClickityClick;
