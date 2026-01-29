
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
    // 1. Get product details
    // 2. Check stock availability
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    // 4. Return success/error message

    const product = getProductById(productId);
    if (!product) return "Product not found";

    if (!checkStock(productId, quantity)) {
        return "Not enough stock";
    }

    const item = cartItems.find((ele) => ele.productId === productId);

    if (item) {
        item.quantity += quantity;
    } else {
        cartItems.push({ productId, quantity });
    }

    return "Product added to cart";
}

export function removeFromCart(productId) {
    // Remove product from cart
   
   cartItems=cartItems.filter((ele)=>ele.productId!==productId)
   return "product removed";
}

export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
   if (!checkStock(productId, newQuantity)) {
        return "Not enough stock";
    }

    const item = cartItems.find((ele) => ele.productId === productId);
    if (!item) return "Product not in cart";

    item.quantity = newQuantity;
    return "Quantity updated";
}


export function getCartItems() {
    // Return all cart items with product details
    
    return cartItems.map((item) => {
        const product = getProductById(item.productId);
        return {
            ...product,
            quantity: item.quantity
        };
    });
}

export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    return cartItems.reduce((acc, ele) => {
        const product = getProductById(ele.productId);
        return acc + product.price * ele.quantity;
    }, 0);
}

export function clearCart() {
    // Empty the cart
    cartItems = [];
    return "Cart cleared";
}

