
import {useState, useEffect} from 'react';
function App() {
  const [resType , setResType] = useState("posts")
  const [items , setItems] = useState([])
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resType])

  return (
    <div className="container mt-5">
      
    <div className="row bg-dark">
     <div className="col-12 mt-2 p-2 ">
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("posts")}}>Posts</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("comments")}}>Comments</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("users")}}>Users</button>
     </div>
     <div className="col-12 my-4">
     <h3 className="text-light m-3">{resType}</h3>
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
