import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import '../App.css';


const Todos = () => {
    const [todos,setTodos]=useState([]);
    const [limit,setLimit]=useState(0);
    const[totalCount,setTotalCount]=useState(0);
    const [page,setPage]=useState(1);
    useEffect(() => {
      const getTodo =async ()=>{
        //using fetch
        // let res=await fetch("http://localhost:8080/todos");
        // let data=await res.json();

        //using axios no need for res.json()
        let res = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}` );
        console.log(res.data);
        setTodos(res.data);
        setTotalCount(Number(res.headers["x-total-count"]));
      };
      getTodo();
    }, [page,limit]);


    // //or u can write
    // useEffect(() => {
    //  axios.get("http://localhost:8080/todos").then(res=>{
    //    setTodos(res.data);
    //  })
    // }, [])
  return <div className="App">
  <button disabled={page<=1} onClick={()=>{setPage(page-1)}}>{"<"}</button>
  <select onChange={(e)=>setLimit (Number(e.target.value))}>
   <option value="5" >5</option>
   <option value="10" >10</option>
   <option value="20" >20</option>
  </select>
  <button disabled={(page*5 > totalCount) }onClick={()=>setPage(page+1)}>{">"}</button>
  
  {todos.map(todo=>(
    <div key={todo.id}>
      {todo.id} {`:`}{todo.value}</div>
  ))}
  
  
</div>

}

export default Todos