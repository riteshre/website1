import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Cardpro = () =>{
  const navigate = useNavigate();
  const [store,setStore]=useState([]);
  let key;


  useEffect(()=>{
    axios.get("/api")
    .then(res=> setStore(res.data))
    .catch(err=> console.log("error"+err))

  },[])
    return (
      <div>
        <Container>
        <div className="row">
         {store.map(sto=>
          <div className="col">
            <Card style={{ width: "18rem" }} key={sto._id}>
            <Card.Img variant="top" src={sto.img}/>
            <Card.Body>
              <Card.Title>{sto.name}</Card.Title>
              <Button variant="primary" onClick={()=>{navigate(`/product/${sto._id}`);}} >Details</Button>
            </Card.Body>
          </Card>
          </div>
          )
         }
         </div>
        </Container>
      </div>
    );
}
export default Cardpro