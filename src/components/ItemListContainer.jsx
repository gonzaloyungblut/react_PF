import Container from 'react-bootstrap/Container';
import { ItemCount } from "./ItemCount";

export const ItemListContainer = (props) => {
    return (
    <Container>
        <h1>{props.greeting}</h1>
        <ItemCount/>
    </Container>);
};
