import React from "react";
// import './App.css';

class App extends React.Component{
  render(){
    return (
      <Button>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Button>
    )
  }
}

class Button extends React.Component{
  constructor(){
    super();
    this.state = {selected:'None'}
  }
  selectedItem(selected){
    this.setState({selected:selected})
  }

  render() {
    let fn = child =>
      React.cloneElement(child,{
        onClick: this.selectedItem.bind(this,child.props.value)
    })

    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h2> You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App