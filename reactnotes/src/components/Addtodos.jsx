import React, { useState } from 'react'
import { useUser } from '../UserContext'
import "./addtodos.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addtodos() {
    const {user}=useUser()
    const [title,settitle]=useState("")
    const [des,setdes]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault()
        let obj={
            title,
            description:des,
            userid:user._id
        }
        console.log(obj)
        fetch("http://localhost:1000/post/post",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((data)=>{
          toast.success(data.msg, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
            console.log(data)
            setdes("")
            settitle("")
        })
        // alert("abc")
    }
    const handletitle=(e)=>{
        settitle(e.target.value)
    }
    const deshandle=(e)=>{
        setdes(e.target.value)
    }
  return (
    <div className='addtodos'>
      <form onSubmit={handlesubmit}>
        <h3>title</h3>
        <input type="text" value={title} onChange={handletitle} placeholder='enter title'/>
        <h3>description</h3>
        <input type='text' value={des} onChange={deshandle} placeholder='enter description'/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}
