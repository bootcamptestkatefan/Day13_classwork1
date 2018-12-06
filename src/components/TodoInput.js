import React, { Component } from 'react'


export default class TodoInput extends Component {
  dispatch = () => {
    const {input} = this.refs
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  checkStatusForCheckboxUse = () => {
    console.log("checkbox")
  }

  // addNewTodo = newTodo => {
  //   this.props.dispatch({
  //     type: "ADD_NEW_TODO",
  //     payload: newTodo
  //   });
  // // this.props.todos.push(newTodo)
  // // this.setState({todos: this.state.todos}) 
  // }

  render() {
    return (
      <div>
        <div>
          <input ref="input"/>
          <button onClick={this.dispatch}>add</button>
        </div>
        <div>
          <input type="checkbox" onChange={()=>this.checkStatusForCheckboxUse()}/>Delete when words are being crossed
        </div>
      </div>
    )
  }
}
// const mapStateToProps = state => ({
//   todos: state.todos
//  }); 
//  // counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
//  // you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>
 
//  //將reducer入面既state轉去呢到既this.props，所以係到call this.props.todos就可以call到
//  export default connect(mapStateToProps)(TodoInput);