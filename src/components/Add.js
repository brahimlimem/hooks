import React,{useState} from 'react';

export default function Add({a}) {

const [ajouter,setajouter]=useState({
  id:Math.random(),
  titre:"",
  description:"",
  url:"",
  rating:"",
  key:Math.random(),
});
const addsubmit=(event)=>{
event.preventDefault();
a(ajouter)
setajouter({
id:Math.random(),
  titre:"",
  description:"",
  url:"",
  rating:"",
  key:Math.random(),
})
}
    return (
      
      <div key="1">
    
     <div>
<form className="d-flex" onSubmit={addsubmit}>
        <input className="form-control me-2" type="text" placeholder="Titre" aria-label="Search" value={ajouter.titre} onChange={(e)=>setajouter({...ajouter,titre:e.target.value})}/>
         <input className="form-control me-2" type="text" placeholder="Description" aria-label="Search"value={ajouter.description} onChange={(e)=>setajouter({...ajouter,description:e.target.value})}/>
          <input className="form-control me-2" type="text" placeholder="Image URL" aria-label="Search"value={ajouter.url} onChange={(e)=>setajouter({...ajouter,url:e.target.value})}/>
           <input className="form-control me-2" type="text" placeholder="Rating" aria-label="Search"value={ajouter.rating} onChange={(e)=>setajouter({...ajouter,rating:e.target.value})}/>
        <button className="btn btn-outline-success" type="submit">Add</button>
      </form>
  </div>

    
    </div>
    )
}