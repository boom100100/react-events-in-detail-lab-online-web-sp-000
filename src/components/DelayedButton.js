import React, { Component } from 'react';

export default class DelayedButton extends Component {
  clickHandler = (event) => {
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay);
    
    //this.props.onDelayedClick//
    
  }
  
  render() {
    return (
      <div><button onClick={this.clickHandler} /></div>
      //    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />

    )
  }
  
  
}