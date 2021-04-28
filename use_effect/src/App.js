
import {useState} from 'react';
function App() {
  const [resType , setResType] = useState("posts")
  return (
    <div className="container mt-5">
      
    <div className="row bg-dark">
     <div className="col-12 mt-2 p-2 ">
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("posts")}}>Posts</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("comments")}}>Comments</button>
     <button className="btn btn-lg btn-info m-2" onClick={()=>{setResType("users")}}>Users</button>
     </div>
     <div className="col-4">
     <h3 className="text-light m-3">{resType}</h3>
     </div>
    </div>
  </div>
  );
}

export default App;
