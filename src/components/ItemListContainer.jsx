import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import data from "../data/products.json";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        promise.then((data) => setProducts(data));

    }, []);

    return (
        <Container>
            <h1>{props.greeting}</h1>
            <div style={{display:"flex", flexWrap: "wrap"}} >
                {products.map((product) => (

                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img style={{height: "200px" }} variant="top" src={product.avatar} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.category}
                            </Card.Text>
                            <Button variant="primary">Ver más</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
