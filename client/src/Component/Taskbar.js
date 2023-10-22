import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Taskbar.css'; 
import  fontimage from '../Image/fontimage.jpg';
import Display from "./Display";

export  default function Taskbar(){
const [task,settask] = useState([]);
const [input,setinput] = useState("");
const [update,setupdate] = useState(false)
const [Updatemode,setUpdatemode] = useState(null)
useEffect( ()=> {
    axios.get('http://localhost:5000/task1')
    .then((res)=>{console.log(res);
     settask(res.data);
    })
},[update]);
const storedata = async (e) =>{
    axios.post('http://localhost:5000/task',{input})
    .then((res)=>{console.log(res.data);
    setinput("");
    setupdate(prevstate => !prevstate)
    });
}



    return(
        <div>
              <h2 className="" id="heading"> Task Manager </h2>
            <div className="box">
              
                <div className="">
                    <div className="container">
           <input 
            type="text"
            className="input"
            placeholder="write you task"
            value={input}
            onChange = {(e)=> setinput(e.target.value)}
            
            
            />
          
            </div>
            <button type="submit"
             className="glow-on-hover"
             onClick={storedata}
             id="input2"
             > 
            Ok, Got It
             </button>
                </div>

            </div>

            <ul className="list-group">
                {task.map((task) => (
                <Display
                key={task.id}
                id={task._id}
               task= {task.input} 
               setupdate={setupdate}
               />))}
            </ul>

        </div>
    )
}