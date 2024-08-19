import {createContext, useState} from "react";
import {productsArray} from "../productsStore.js";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {
    },
    AddOneToCart: () => {
    },
    removeOneFromCart: () => {
    },
    deleteFromCart: () => {
    },
    getTotalCost: () => {
    },
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { //Product is not in cart
            setCartProducts([...cartProducts, {id, quantity: 1}]);
        } else { //Product is not in cart
            setCartProducts(cartProducts.map(
                    product => product.id === id
                        ? {...product, quantity: product.quantity + 1} :
                        product
                )
            )
        }
    }

    const contextValue = {
        items: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={{contextValue}}>
            {children}
        </CartContext.Provider>
    )
}

