import React, { useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import { Link } from 'react-router-dom';



function Edit() {
   const context = useContext(DataContext);
   const navigate=useNavigate();
   
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) 
   const index = (location.state.data);
   console.log(index);
   const newObj={
    name:context.entries[index].name,
    age:context.entries[index].age,
    course:context.entries[index].course,
    batch:context.entries[index].batch
   };
 
   console.log(newObj);
   const handleChange=(e)=>{
    newObj[e.target.name]=e.target.value;
   }
   const handleUpdate=()=>{
    console.log(context.entries[index]);
    context.updateFunction(
      (prevObj)=>{
        prevObj[index]=newObj;
        return (prevObj);
      }
    );
    navigate('/student');
   }

   return (
    <>
    <center>
    <input name='name' onChange={handleChange} placeholder={context.entries[index].name}></input><br/>
        <input name='age' onChange={handleChange}  placeholder= {context.entries[index].age}></input>
        <br/>
        <input  name='course' onChange={handleChange}  placeholder= {context.entries[index].course}></input><br/>
        <input  name='batch' onChange={handleChange}  placeholder={context.entries[index].batch}></input><br/>
        <button style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginRight:'20px',marginTop:'80px',fontSize:'1em'}}><Link to='/student' style={{textDecoration:'none',color:'black',fontSize:'1.3em'}}>Cancel</Link></button>
        <button onClick={handleUpdate} style={{backgroundColor:'white',width:'150px',height:'40px',borderRadius:'40px',marginLeft:'20px',marginTop:'80px',fontSize:'1.3em'}} className='submit' >Update</button>
    </center>
        
    </>
  )
}

export default Edit;