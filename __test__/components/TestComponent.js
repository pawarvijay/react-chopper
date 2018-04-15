import React from 'react';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname : 'chopper'}
  }

  render() {
    return (
      <div>Hello react {this.state.firstname}</div>
    );
  }
}

export default TestComponent



