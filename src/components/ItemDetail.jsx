export const ItemDetail = ({ product }) => (
    <div style={{ display: "flex", flexWrap: "wrap" }} >
        <h1>{product.name} </h1>
        <img src={product.avatar} alt={product.category} />
        <div>{product.stock}</div>
    </div>

);