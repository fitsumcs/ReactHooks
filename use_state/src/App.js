import React , {useState} from 'react'

function App() {

    const [count, setCount] = useState(0);    

    function increment(){
      setCount(prev => prev+1)
    }
    function decrement(){
      setCount(prev => prev-1)
    }

  return (
    <div className="container mt-5">
      <div className="row bg-dark">
       <div className="col-4 ">
       <button className="btn btn-lg btn-info px-5 m-3" onClick={ decrement}>-</button>
       </div>
       <div className="col-4">
       <h3 className="text-light m-3">{count}</h3>
       </div>
       <div className="col-4">
       <button className="btn btn-lg btn-info px-5 m-3" onClick={increment}>+</button>
       </div>
       
      </div>
    
     
     
    </div>
  );
}

export default App;
