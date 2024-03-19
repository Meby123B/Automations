export const domain = 'https://www.saucedemo.com/';

export const login = {
    usernameInput:'[name="user-name"]',
    passwordInput:'[name="password"]',
    loginBtn:'[name="login-button"]',
    errorMsg:'[data-test="error"]',
}

export const inventory = {
    // itemCard:'.inventory_item',
    itemBtn:'.btn_inventory',
    prices:'.inventory_item_price',
    sortBtn:'.product_sort_container',
    cartBtn:'.shopping_cart_link',
    cartBadge:'.shopping_cart_badge',
}

export const cart = {
    itemCard:'.cart_item',
    removeBtn:'.cart_button',

    BackToInventoryBtn:'[name="continue-shopping"]',
    checkoutBtn:'[name="checkout"]',
}

export const checkout = {
    firstNameInput:'[name="firstName"]',
    lastNameInput:'[name="lastName"]',
    zipInput:'[name="postalCode"]',
    errorMsg:'[data-test="error"]',

    cancelBtn:'#cancel',
    continueBtn:'#continue',
}


export default {
    domain,
    login,
    inventory,
    cart,
    checkout
} 