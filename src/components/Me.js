import React, { Component } from 'react';

class Me extends React.Component {
  render(){
    return <h1>Hello, I'm {this.props.name}</h1>;
  }
}

export default Me;
