import React, { useState } from "react";
import 'animate.css';
import axios from "axios";
import image1 from '../Image/edit.png';
import image2 from '../Image/delete.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Display.css';




export default function Display({id,task,setupdate})
{
const  [pensil,setpensil] = React.useState("true");
const  [input,setinput] = useState("");

function clicked() {
    setpensil(prevstate=>!prevstate)
   
   
   }


   const  Edit = async() => {
    console.log("yes");
 await axios.put(`http://localhost:5000/update/${id}`,{input})
 .then((response) =>{console.log("connect")})
 .catch((error) => {console.log(error)});
   }

 const Removetask = async() => {
console.log("call ho rha hein");
  await axios.delete(`http://localhost:5000/remove/${id}`)
    .then((res)=>{console.log("connected")
    setupdate((prevdata)=>!prevdata);

    })
    .catch((err)=>{console.log("kya yaar")});

 } 

    return(
        
        <div className=" animated bounceInU " id="anim">

        
            <div className="d-flex">
            <h5>{task}</h5>
 {       pensil ?   <>  <img src={image1} alt=""  id="icon1"  onClick={clicked} />   </>
 
 :
 
 <div>  <div><img src={image1} alt=""  id="icon1" onClick={clicked} /></div> 
    < div id="box">
      <div className="textInputWrapper">
    <input 
            type="text"
            className="textInput"
            placeholder="write you task"
            value={input}
            onChange = {(e)=> setinput(e.target.value)}
            
            />
</div>

            <button type="submit" className="btn text-light " onClick={Edit} id='input3' >Update</button>
            <h4 className="id">I.D {id}</h4>
   
    </div>
 
 
   </div>}
         <button className="" id="btndelete"  onClick={Removetask} > <img src={image2} alt="" id="icon" /> </button>
            </div>

        </div>
    );
}
