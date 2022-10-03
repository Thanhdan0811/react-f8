

const logger = (reducer) => {

    return (preState, action) => {
        
        console.group(action.type);
        console.log("Prev State : ", preState);
        
        
        const newState = reducer(preState, action);
        
        console.log("New State : ", newState);
        console.groupEnd();
        return newState
        
    }
};

export default logger;