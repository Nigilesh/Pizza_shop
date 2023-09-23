import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import { useState } from "react";
import ProductList from "./Pizzacard";


const PizzaList = () => {
    const [menu] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
        <section id="menu" className="bg-light">
            <Container>
                <div className="text-primary text-center my-3 py-3">Treat yourself for with Every Day Menu<i class="bi bi-tiktok"></i></div>
                <Row>
                    {
                        menu.map((item) => {
                            return (
                                <Col md={6} lg={4} key={item}>
                                    <ProductList></ProductList>
                                </Col>
                            );
                        })
                    }

                </Row>
            </Container>
        </section>
    );
}
export default PizzaList;