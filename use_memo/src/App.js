import {useState} from 'react'

function App() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

  return (
    <div className="container mt-5">
      <div className="row bg-dark">
       <div className="col-12 m-3 ">
        <input type="number"  value={number}  onChange={e=>{setNumber(parseInt(e.target.value))}}/>
       </div>
       <div className="col-12">
       <button className="btn btn-lg btn-info m-3" onClick={()=>{setDark(prev => !prev)}}>Change Theme</button>
       </div>   
      </div>
      <div className="row">
      <div className="col-12">
       <h3 className="m-3">{number}</h3>
       </div>
      </div>
    </div>
  );
}

export default App;
