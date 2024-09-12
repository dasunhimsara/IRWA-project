import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function App() {

  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("http://127.0.0.1:5000/members")
      console.log(res.data)
      setData(res.data.members)
    }
    fetchData()
  },[])
  return (
    <div>
      {
        data.map((item,index)=> {
          return (
            <h3 key={index}>{item}</h3>
          )
        })
      }
      
      <h1>apppppp</h1></div>
  )
}
