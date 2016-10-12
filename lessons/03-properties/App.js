import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
}

App.defaultProps ={
  txt: 'this is the default txt',
  cat: 5
}

ReactDOM.render(
  <App /*txt = 'text'*/ />,
  document.getElementById('app')
);
