import { SET_TOĐO_INPUT, ADD_TODO } from "./constansts";

export const setTodoInput = payload => {
    return {
        type: SET_TOĐO_INPUT,
        payload
    };
};

export const addTodo = payload => {
    
    return {
        type: ADD_TODO,
        payload
    };
};