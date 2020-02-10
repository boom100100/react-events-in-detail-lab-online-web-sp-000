import React, { Component } from 'react';

export default class DelayedButton extends Component {
  clickHandler = (event) => {
    setTimeout(this.props.onDelayedClick, this.props.delay);
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