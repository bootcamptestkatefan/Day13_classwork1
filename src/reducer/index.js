const initialState = { 
    todos: []
    //counterSum: 0
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_NEW_TODO":
        return {
          ...state,
          todos: state.todos.concat(payload)};
     // case "COUNTERSUM":
     // console.log(payload)
     //   return { counterSum: state.counterSum + payload };
      default:
        return state;
    }
  };