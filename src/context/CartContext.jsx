import {createContext, useState} from "react";
import {getProductData} from "../productsStore.js";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {
    },
    addOneToCart: () => {
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
            ))
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(cartProducts.map(
                product => product.id === id
                    ? {...product, quantity: product.quantity - 1} :
                    product
            ))
        }
    }

    function deleteFromCart(id) {
        setCartProducts(cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        );
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost;
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
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
