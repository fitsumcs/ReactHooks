import {useState, useMemo} from 'react'

function App() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const sqrtNum = useMemo( ()=> { return longProcess(number)}, [number])
    const theme = {
      backgroundColor : dark ? "black" : "white",
      color : dark ? "white" : "black"
    }

    function  longProcess(num){
      // imitate long proccess
      for (let index = 0; index < 2000000000; index++) {}
      return num * num;
    }

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
      <div className="row mt-3">
      <div className="col-12">
       <h3 className="p-4"  style={theme}>{sqrtNum}</h3>
       </div>
      </div>
    </div>
  );
}

export default App;
