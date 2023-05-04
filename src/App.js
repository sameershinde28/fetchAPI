import './App.css';
import React, {useState } from 'react'
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function saveData()
{
  let data={name,email,mobile}
console.warn(data);
// console.warn(name,email,mobile);

}
    
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default App;