import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../../components/Header/header'
import Footer from '../../components/footer/footer'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Product =()=>{
  const {id} = useParams();

  const[idata,setIdata]=useState([]);

  useEffect(()=>{
    axios.get(`/api/${id}`)
    .then(res=> setIdata(res.data))
    .catch(err=> console.log("error"+ err))

  },[])

    return (
      <div>
        <Header />
        <div className="p-5">
          <Container>
            <Card>
              <div className="row">
                <div className="col-md-6">
                  <img src={idata.img} class="img-fluid"></img>
                </div>
                <div className="col-md-6 p-5">
                  <Card.Body>
                    <Card.Title>{idata.name}</Card.Title>
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Container>
        </div>
        <Footer />
      </div>
    );
}
export default Product