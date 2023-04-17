import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import DataContext from './DataContext';
const Add = () => {
    const context=useContext(DataContext);
    const navigate=useNavigate();
    const [state,setDetails]=useState({
      name:"",
      age:"",
      course:"",
      batch:""
     });
    const handleChange=(e)=>{
      setDetails({...state,[e.target.name]:e.target.value})
        console.log(e.target.value);
    }
    const onSubmit=(e)=>{
      e.preventDefault();
      context.updateFunction((prevState)=>{prevState.push(state); return prevState})
      navigate('/student')
    }
  return (
    <div>
      <center>
      <input  onChange={handleChange} name='name' placeholder='Name'></input><br/>
        <input onChange={handleChange} name='age' placeholder='Age'></input><br/>
        <input onChange={handleChange} name='course' placeholder='Course'></input><br/>
        <input onChange={handleChange} name='batch' placeholder='Batch'></input>
        <br/>
        <div >
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'20px',marginTop:'80px',fontSize:'1em'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginLeft:'20px',marginTop:'80px',fontSize:'1.3em'}} className='submit' onClick={onSubmit}>Submit</button>
        </div>
      </center>
       
        
    </div>
  )
}

export default Add