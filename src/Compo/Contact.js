import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FloatingLabel, Button } from "react-bootstrap";
import Footer from "./Footer";
import Headers from "./Header";
const Comment = () => {
  
    return (
        <>
        <Headers></Headers>
        <section id="contactus" className="bg-light py-3">
              
            <div className="text-center my-2 py-5">
                <h3 className="display-5">
                    Comments  <i class="bi bi-chat-heart"></i>
                </h3>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open-heart-fill"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-person"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                            
                            <Button class="btn btn-primary">Submit</Button>
                           
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer></Footer>
        </>
    )
}
export default Comment;