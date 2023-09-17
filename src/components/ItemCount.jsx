import { useState } from "react";


export const ItemCount = ({ onadd, stock}) => {
const [count, setCount] = useState(1);

const handleDecreaseCount = () => {
    if (count > 1) {
        setCount((prev) => prev - 1);
    }
};

const handleIncreaseCount = () => {
    if (stock > count) {
        setCount((prev) => prev + 1);
    }
};

const onAdd = () => {
    alert(count);
};

    return (
        <div className="ItemCount">
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};