import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Pizzacard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Card className="m-3">
                <Card.Img variant="top" src={require('../Assest/pizza.jpeg')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="primary" onClick={() => setModalShow(true)} >Add to Basket </Button>
                    </div>
                </Card.Body>
            </Card>
           
        </>
    )
}
export default Pizzacard;