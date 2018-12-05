const initialState = { 
    todos: []
    //counterSum: 0
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_NEW_TODO":
      console.log(payload)
        return {
          ...state,
          todos: state.todos.concat(payload)};
      case "CHANGE_STATUS":
        return{
          ...state,
          todos: state.todos.map(item => {
            if (item.id === payload){
              if (item.status === "active"){
                return{
                  ...item,
                  status: "inactive"
                }
              }
              return{
                ...item,
                status: "active"
              }
            }
            return item
          })
        }
     // case "COUNTERSUM":
     // console.log(payload)
     //   return { counterSum: state.counterSum + payload };
      default:
        return state;
    }
  }; 