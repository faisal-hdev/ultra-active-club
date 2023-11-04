// Use local storage to manage cart data 
const addToDb = id => {
    let shoppingCart = {};
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('user-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }
    // add Quantity 
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('user-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = id => {
    // console.log('inside fake DB', id);
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            console.log('existing in the cart');
        }
    }
};

const getStoredCart = () => {
    let shoppingCart = {};
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } return shoppingCart
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
};

export {
    addToDb,
    removeFromDb,
    getStoredCart,
    deleteShoppingCart
};