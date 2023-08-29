import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";

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
            <h1>{props.greeting}</h1>
            <div style={{display:"flex", flexWrap: "wrap"}} >
                <h1>{product.name} </h1>
                <img src={product.avatar} alt={product.category}/>
                <div>{product.stock}</div>
            </div>
        </Container>
    );
};
