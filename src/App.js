import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Card from './card'


function App() {
  const[listOfUser , setlistOfUser]=useState([]);
  const[error, seterror]=useState(null);
  useEffect(()=>
  {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
      setlistOfUser(response.data)
    })
    .catch(function(error){

    }
    )
  },[] 
  
  )
  return (
    <div style={{display:"flex" , flexWrap :"wrap", justifyContent:"space-around" }}>
      {listOfUser.map((user,i)=> <Card key={i} user={user} />)}
    </div>
  );
}

export default App;
