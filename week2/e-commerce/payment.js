//iv.payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    // 2. Apply discount if coupon provided
    // 3. Validate payment method (card/upi/cod)
    // 4. Process payment (simulate)
    // 5. Reduce stock for all items
    // 6. Clear cart
    // 7. Generate order summary

    // Return order summary:
    // {
    //   orderId: ...,
    //   items: [...],
    //   subtotal: ...,
    //   discount: ...,
    //   total: ...,
    //   paymentMethod: ...,
    //   status: 'success/failed',
    //   message: '...'
    // }
    const cartItems = getCartItems();
    const subtotal = getCartTotal();

    if (cartItems.length === 0) {
        return {
            status: 'failed',
            message: 'Cart is empty'
        };
    }

    if (!validatePaymentMethod(paymentMethod)) {
        return {
            status: 'failed',
            message: 'Invalid payment method'
        };
    }

    let discount = 0;
    let total = subtotal;

    if (couponCode) {
        const discountResult = applyDiscount(subtotal, couponCode, cartItems);
        discount = discountResult.discount;
        total = discountResult.finalTotal;
    }

    // Reduce stock
    cartItems.forEach(item => {
        reduceStock(item.id, item.quantity);
    });

    clearCart();

    return {
        orderId: generateOrderId(),
        items: cartItems,
        subtotal: subtotal,
        discount: discount,
        total: total,
        paymentMethod: paymentMethod,
        status: 'success',
        message: 'Payment successful'
    };
}

export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    const methods = ['card', 'upi', 'cod'];
    return methods.includes(method);
}

function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
    
}



