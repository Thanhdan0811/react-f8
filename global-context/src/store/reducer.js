import { SET_TOĐO_INPUT, ADD_TODO } from "./constansts";

const initState = {
    todos: [],
    todoINput: ''
};

const reducer = (state, action) => {

    
    const { type, payload } = action;

    switch (type) {
        case SET_TOĐO_INPUT:
            return  {...state, todoInput: payload} ;
        case ADD_TODO:
            return  {...state, todos: [...state.todos, payload]} ;
        default:
            throw new Error('Invalid Action');
    }
};

export {initState};
export default reducer;