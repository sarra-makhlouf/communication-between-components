import React, { Component } from 'react'
import Search from './search'
import List from './list';


const arr = ["slim", "sarra", "mariem"]

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recherch: ""
    }
  }
handelChange = (newRecherch) => {
  this.setState({
    recherch: newRecherch
  })
}

  render() {
    return (
      <div>
        <Search onChange={this.handelChange}/>
        <List arr={arr.filter(el => el.includes(this.state.recherch))}/>
      </div>
    )
  }
}
