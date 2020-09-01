import React from "react"
import { Card , } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
 
export default function card ({user}){
    return(
        <div  className='cards'>
            <Card className='cards'>

  <Card.Body style={{color:"black"}}>
    <Card.Title> {user.name} </Card.Title>
    
    <Card.Text >
{user.email}

    </Card.Text>
    <Card.Text >
    { user.id}
    
    </Card.Text>
    
  
    
  </Card.Body>
</Card>
        </div>

    )
}
