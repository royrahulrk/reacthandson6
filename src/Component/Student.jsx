import React,{useContext} from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import DataContext from "./DataContext"

const Student = () => {
  const handleAdd=()=>{
    console.log("Add Called");
  }
  const context=useContext(DataContext);
  console.log(context);
  return (
    <div>
        <Navbar/>
        <span style={{marginTop:'60px',marginLeft:'30px',fontSize:'2em',fontWeight:'bold'}}>Student</span>
        <button onClick={handleAdd} style={{position:'absolute',right:'100px',top:'80px',width:'200px',height:'50px',backgroundColor:'rgb(15, 15, 128)'}}><Link to='/add' style={{textDecoration:'none',fontSize:'1.5em',color:'white'}}>Add New Student</Link></button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
             context.entries.map((item,index)=>
                <tr  style={{textAlign:'center'}} key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td>
                    <Link to='/edit' state={{data:index}}>edit</Link>
                  </td>
                </tr>
)
            }
          </tbody>
        </table>
        </div>
  );
}

export default Student