import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {count:0,
      num:0
    
    }
    this.handleClick = this.handleClick.bind(this)
  }
 handleClick(){
 this.setState({count: this.state.count +1})
  }

  shouldComponentUpdate(){
    if(this.state.count % 2 == 0)
    return false
    else return true
  }


  render(){
    console.log(`Rendering with count:-${this.state.count}`)
    return(
      <div>
      <span id="count">{this.state.count}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )

  }
}

export default App;
