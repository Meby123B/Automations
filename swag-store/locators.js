export default {
    domain:'https://www.saucedemo.com/',
    login:{
        username:'[name="user-name"]',
        password:'[name="password"]',
        loginBtn:'[name="login-button"]',
    },
    home:{
        itemCard:'.inventory_item',
        itemBtn:'.btn_inventory',
    },
    cart:{
        itemCard:'.cart_item',
        removeBtn:'.cart_button',

        continueBtn:'[name="continue-shopping"]',
        checkoutBtn:'[name="checkout"]',
    },
    checkout:{
        firstNameInput:'[name="firstName"]',
        lastNameInput:'[name="lastName"]',
        zipInput:'[name="postalCode"]',

        cancelBtn:'#cancel',
        continueBtn:'#continue',
    }
}