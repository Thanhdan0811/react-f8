


// useReducer

import { useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from './actions';
import logger from "./logger";

import reducerJob,{initState} from './reudcer'


const TodoListReducer = () => {

    const [state, dispatch] = useReducer(logger(reducerJob), initState);
    const inputRef = useRef();

    const { job, jobs } = state;

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }
    return (
        <div style={{padding: '0 20px'}}>
            <h3>To do</h3>
            <input 
                value={job} 
                type="text" 
                placeholder="Enter todo..." 
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                ref={inputRef}
            />
            <button
                onClick={handleSubmit}
            >
                Add                
            </button>
            <ul>
                {
                    jobs.map((jb, idx) => {
                        return <li key={idx}>{jb}
                            <span onClick={() => dispatch(deleteJob(idx))}>&times;</span>
                        </li>
                    } )
                }
            </ul>
        </div>
    );

}

export default TodoListReducer;