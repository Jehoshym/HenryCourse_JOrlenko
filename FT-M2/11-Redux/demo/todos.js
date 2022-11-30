const redux = require('redux');  //importa redux

const createStore = redux.createStore; //importa el metodo createstore

//types actions. se puede crear un archivo esclusivo para nombrar las types y luego importarlas a los archivos
//por convencion se guardan en una constante para evitar olvidarnos y escribirla mal, y se escriben en mayusculas
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';

//el estado inicial
const initialState = {
  todos: []
}

//reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('Subscription: ', store.getState());
});

//ACTION CREATORS-> recibe un argumento que es un texto que pasara al payload, el cual se asignara al action add_todo
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

//DISPATCH
store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))

console.log(store.getState());