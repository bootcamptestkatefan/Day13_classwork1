import React, { Component } from 'react'
import "./style.css"

export default class Todos extends Component {

  showStatus = (status) => {
    return status === "active" ? "activeClass" : "inactiveClass";
  }
  
  render() {
    const {props} = this.props
    return (
      <div>
        {this.props.todos.map((todo, i) => 
        <li key={i} onClick={()=>{this.props.crossItself(todo.id)}} className = {this.showStatus(todo.status)}>{todo.content}</li>)}
      </div>
    )
  }
}

