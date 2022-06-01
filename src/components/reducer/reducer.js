const initialState = [
  {
    id: 1,
    todo: 'to do the shopping',
    done: false,
  },
]

const todoReducer = (state = initialState, action) => {

    // action?.type === 'add' ?  [...state, action.payload] :  state

  if (action?.type === 'add') {
    return [...state, action.payload]
  }
  return state

}

const todo_1 = {
  id: 2,
  todo: 'to do the whashing machine',
  done: true,
}

const addAction = {
  type: 'add',
  payload: todo_1,
}

let todos = todoReducer()

todos = todoReducer(todos, addAction)

console.log(todos)
