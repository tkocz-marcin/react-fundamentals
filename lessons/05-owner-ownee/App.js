// https://jsbin.com/yixosu/edit?js,output
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = { txt: 'Wpisz coś'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <Header />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
      <div>
        <input type="text"
          onChange={props.update} />
        <h1>{props.txt}</h1>
      </div>
    );
}
const Header = () => {
  return <h1> Witam ! </h1>
}

export default App
