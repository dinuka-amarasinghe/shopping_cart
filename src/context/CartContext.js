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

