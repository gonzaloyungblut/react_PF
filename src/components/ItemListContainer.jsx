import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";

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
                <ItemList products={products}/>
            </div>
        </Container>
    );
};
