import React, { Component } from 'react';

// NOTE:
// This is the main component. Here I could use components 
// common to all views, i.e. footer, nav bar, etc.
class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default App;
