import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>UserId</td>
          <td>Id</td>
          <td>Title</td>
          <td>Completed</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
            <td>{item.completed}</td>  
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
