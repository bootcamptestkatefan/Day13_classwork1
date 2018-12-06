import React, { Component } from 'react'
import "./style.css"

export default class Todos extends Component {

  showStatus = (status) => {
    return status === "active" ? "activeClass" : "inactiveClass";
  }
  doCrossItself = (id, status) => {
    this.props.crossItself(id, status);
  }
  render() {
    //const {props} = this.props
    return (
      <div>
        {this.props.todos.map((todo, i) => 
        <li key={i} onClick={()=>{this.doCrossItself(todo.id, todo.status)}} className = {this.showStatus(todo.status)}>{todo.content}</li>)}
      </div>
    )
  }
}

