import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    const {props} = this.props
    return (
      <div>
        {this.props.todos.map((todo, i) => <li  
        key={i}>{todo.content}</li>)}
      </div>
    )
  }
}