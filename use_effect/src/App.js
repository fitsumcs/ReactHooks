
import {useState, useEffect} from 'react';
function App() {
  const [resType , setResType] = useState("posts")
  const [items , setItems] = useState([])
  const [w_width, setWWidth] = useState(window.innerWidth)
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resType}`)
    .then(response => response.json())
    .then(json => setItems(json))

    return ()=>{
      // Clean up on UnMount
      console.log("Clean up on UnMount");
    }
  }, [resType])

  // changeResize
  const changeResize = ()=>{
    setWWidth(window.innerWidth)
  }
  useEffect(()=>{
    
    window.addEventListener('resize', changeResize)

    return ()=>{
      // Clean up on UnMount
      window.removeEventListener('resize'.changeResize)
    }

  }, [])

  return (
    <div className="container mt-5">
      
    <div className="row bg-dark">
     <div className="col-12 mt-2 p-2 ">
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("posts")}}>Posts</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("comments")}}>Comments</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("users")}}>Users</button>
     </div>
     <div className="col-12 my-4">
     <h3 className="text-info m-3">{w_width}</h3>
     <h3 className="text-light m-3">{resType}</h3>
     <hr className="text-info m-3"/>
     <hr className="text-info m-3"/>
     <p className="text-light">
       {
         items.map(item => {
              return <pre>{JSON.stringify(item)}</pre>
         })
       }
     </p>
     </div>
    </div>
  </div>
  );
}

export default App;
