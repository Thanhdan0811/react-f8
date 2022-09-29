import { useState } from "react";
import Content from "./Content";
import UseMemo from "./UseMemo";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
      <UseMemo />
    </div>
  );
}

export default App;

// baif 1 -  React Hook useState
/*

import { useState } from 'react';


const orders = [100, 200, 300];

function App() {



  const [counter, setCounter] = useState(() => {
    // nếu để bên ngoài callback thì mỗi lần click Increase thì nó sẽ thực hiện tính toán lại và chậm.
    return orders.reduce((total, cur) => total + cur);
  });

  const handleIncrease = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  };

  return (
    <div className="App" style={{padding: '20px'}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease} >Increse</button>
    </div>
  );
}

export default App;

*/

// VBài 2 Tođo list useState
/* 

function App() {

  

  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) ?? [];
  });
  const [job, setJob] = useState('');

  const handleSubmit = () => {
    if (!job) return;
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);

      localStorage.setItem('jobs', jsonJobs);

      return newJobs;


    });
    setJob('');
  }

  return (
    <div className="App" style={{padding: '20px'}}>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Change</button>

      

      <ul>
        {
          jobs.map((job, idx) => {
            return <li key={idx}>{job}</li>
          })
        }
      </ul>

    </div>
  );
}

*/
