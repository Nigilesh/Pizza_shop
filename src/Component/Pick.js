import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const Pick = () => {
    const [show, setShow] = useState(false);
    return (
        <section id="musttry" className="my-3">
            <div className="text-center my-2 py-5">
                <h1 className="display-5">
                    <i class="bi bi-search-heart"></i>Pick of the week!
                    </h1>
                    </div>
                <Container>
                    <Row className="align-items-center" >
                        <Col md={7}>
                            <Image src={require('../Assest/center.jpeg')}
                             fluid={true} 
                             alt='pizza'
                             rounded
                             >
                            </Image>
                        </Col>
                        <Col md={5}>
                            <div className="p-3">
                                <h2 className="h1">Double Cheese </h2>
                                <p className="lead text-muted"> a pharetra augue mollis interdum, a pharetra augue mollis interdum</p>
                                <Button onClick={() => setShow(true)}><i class="bi bi-basket"></i>By Now</Button>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer
                        className="position-fixed bottom-0 end-0 p-3"
                        position='bottom-end'>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header closeButton={false}>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Container>

        </section>
    )
}
export default Pick;