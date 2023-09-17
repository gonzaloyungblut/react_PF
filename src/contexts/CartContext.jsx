import { createContext, useState} from "react"

export const CartContext = createContext()

export const CartProvider = ({ children}) => {
    const [items, setitems] = useState([])

    const alreadyExists = items.some(ite, =>item.id === product.id)
    if (!alreadyExists) setItems(prev => [ ... prev, { ... product, quantity }])
    else {
const actualizarProducts = items.map(item => {
    if (item.id === product.id) return {
        ... item,
        quantity: item.quantity + quantity,


        
    } else return item 
          
})
setItems(actualizarProductos)
    }


const totalWidget = items.reduce((acc, val)=>acc + val.quantity,0)

const removeItem = id => {
    const itemsFiltered = items.filter(item => item.id <> id)
    setItems(itemsFiltered)
}

const clear =() => setItems([])

return (
    <CartContext.Provider
    value={{addItem, items, removeItem, clear, totalWidget}}
>

</CartContext.Provider>
    )}