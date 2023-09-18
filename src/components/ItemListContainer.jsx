import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDocs, collection } from "firebase/firestore"

import { ItemList } from "./ItemList";

import data from "../data/products.json";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const refCollection = collection(db, "items")
        getDocs(refCollection)
            .then(snaoshot => {
                if (snapshotEqual.size === 0) console.log("no hay resultados")
                else setProducts(
                    snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    })
                )
            })
            .finally (()=>{setLoading(false)}) },[])

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        promise.then((data) => {
            if (!id) { setProducts(data); } else {
                const productsFiltered = data.filter((product) => product.category === id);
                setProducts(productsFiltered);
            }
        });
    }, [id];

    if (loading) return <div> Loading ... </div>
    return (
        <Container>
            <h1>{props.greeting}</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }} >
                <ItemList products={products} />
            </div>
        </Container>
    );
;
