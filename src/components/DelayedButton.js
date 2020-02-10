import React, { Component } from 'react';

export default class DelayedButton extends Component {
  clickHandler = (event) => {
    set
    //event.persist();
    //this.props.onDelayedClick//
    
  }
  
  render() {
    return (
      <div><button onClick={this.clickHandler} /></div>
      //    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />

    )
  }
  
  
}