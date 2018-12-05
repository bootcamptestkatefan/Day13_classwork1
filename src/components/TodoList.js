import React, { Component } from 'react'
import TodoInputContainer from '../containers/TodoInputContainer'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {
    state = {todos: []}
    crossItself = (id) => {
      this.props.dispatch({
        type: "CHANGE_STATUS",
        payload: id
      });
    }
    // addNewTodo = newTodo => {
    //   this.props.dispatch({
    //     type: "ADD_NEW_TODO",
    //     payload: newTodo
    //   });
    // this.props.todos.push(newTodo)
    // //this.setState({todos: this.state.todos}) 
    // }
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <ul>
        <Todos todos={this.props.todos} crossItself={this.crossItself}/>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
 todos: state.todos
}); 
// counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
// you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>

//將reducer入面既state轉去呢到既this.props，所以係到call this.props.todos就可以call到
export default connect(mapStateToProps)(TodoList);//let CounterGroup and Redux know each other