import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemList = ({ products }) => products.map((product) => (
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
));
