import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { ItemDetail } from "./ItemDetail";

import data from "../data/products.json";

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data[0]), 2000);
        });

        promise.then((data) => setProduct(data));

    }, []);

    if (!product) return <div>Loading...</div>
    return (
        <Container>
            <h1>Detalle</h1>
            <ItemDetail product={product}/>
        </Container>
    );
};
