import { ADD_JOB, DELETE_JOB, SET_JOB } from './constants';
// 1. Init state
export const initState = {
    job: '',
    jobs: []
};

 

// 3. reducer
const reducerJob = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case SET_JOB:
            return {
                ...state,
                job: payload
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload]
            }
        case DELETE_JOB:
            
            return {
                ...state,
                jobs: state.jobs.filter((job, idx) => idx != payload)
            }
        default:
            throw new Error('Invalid action');
    };

};

export default reducerJob;