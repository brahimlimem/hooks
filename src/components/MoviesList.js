import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
//import { Container } from "react-bootstrap-grid-component/dist/Container";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import Add from './Add';

export default function   MoviesList () {

    const [data,setdata] = useState(
    [
        {id:Math.random(), titre:"SPIDER MAN",description:"L'identité de Spider-Man étant désormais révélée, Peter demande de l'aide au docteur Strange. Lorsqu'un sort tourne mal, des ennemis commencent à apparaître, forçant Peter à découvrir ce que signifie vraiment être Spider-Man.",url:"https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg",rating:"8,7",key:"1"},
        {id:Math.random(), titre:"IN THE HEIGHTS",description:"Une version cinématographique de la comédie musicale de Broadway dans laquelle Usnavi, sympathique propriétaire d'une cave new-yorkaise, épargne chaque centime en rêvant d'une vie meilleure.",url:"https://m.media-amazon.com/images/M/MV5BMzM1ZDY0YTktZTYzZi00MjZjLTllMDMtMmNlMmM5NmY4ZjllXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",rating:"7,3",key:"2"},  
        {id:Math.random(), titre:"MOONFALL ",description:"Moonfall, a mysterious force knocks the Moon from its orbit around Earth and sends it hurdling on a collision course with life as we know it. With mere weeks before impact and the world on the brink of annihilation, NASA executive and former astronaut Jo Fowler is convinced she has the key to saving us all - but only one astronaut from her past, Brian Harper and a conspiracy theorist K.C. Houseman believe her. These unlikely heroes will mount an impossible last-ditch mission into space, leaving behind everyone they love, only to find that they might have prepared for the wrong mission.",url:"https://fr.web.img3.acsta.net/pictures/22/01/06/17/08/1230710.jpg",rating:"7,5",key:"3"},
        {id:Math.random(), titre:"PIG",description:"A truffle hunter who lives alone in the Oregon wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.",url:"https://fr.web.img4.acsta.net/pictures/21/09/02/16/46/1905332.jpg",rating:"7",key:"4"}
    ]
)
;

const  [showimg,setshowimg]= useState(data[0].url);
const supprimer=(id)=>{

   setdata(data.filter(item=>item.id!==id))
} ;

const show=(rl)=>{
            setshowimg(rl);
}

const search=(e)=>{
 const x=data.filter(el=>el.titre.includes(e));       
setdata(x);

} 
const add=(ajouter)=>{
setdata([...data.concat(ajouter)]);
console.log(ajouter);
};
    return (

 
<div key="2">

<Navbar  search={search}/>
<Add a={add}/>

<div className="card" >
        <img src={showimg} className='container'  alt="..." width="50px" height="200px"/>
</div>

<div className="container" >
  <div className="row" key={data.id}>
{data.map((data)=>(
 <div className="col">
<div className="card-group">
<div className="card" >
        <img src={data.url}  className="card-img-top" alt="..." width="200px" height="300px"/>
<div className="card" width="18rem;">
        <h5 className="card.title">{data.titre}</h5>
          <p className="card-text">{data.description.substring(0, 80)}...</p>
<button type="button" className="btn btn-primary" onClick={()=>show(data.url)}>Show</button>
<button type="button" className="btn btn-danger" onClick={()=>supprimer(data.id)}>Delete</button>

</div>   
</div>

</div>





</div>


))}
</div>




</div>

</div>
)}