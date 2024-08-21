const productsArray = [
    {
        id: "price_1PqEXLP5yaa259l5MABeOCRy",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1PqEYRP5yaa259l58BGW6j2h",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1PqEZdP5yaa259l5ITwRVTCS",
        title: "Camera",
        price: 39.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id)
        return undefined;
    }
    return productData
}

export {productsArray, getProductData};