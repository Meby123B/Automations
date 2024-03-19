import { chromium } from 'playwright';
import locators from './locators.js';
import LoginPage from './pages/loginPage.js';
import InventoryPage from './pages/inventoryPage.js';
import CartPage from './pages/cartPage.js';
import CheckoutPage from './pages/checkoutPage.js';


(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    // const login = new loginPage(page);
    // await login.goto();
    // await login.login();
    
    // const inventory = new InventoryPage(page);
    // await inventory.goto();
    // await inventory.addItem(1);
    // await inventory.addItem(1);
    // await inventory.addItem(2);
    // await inventory.addItem(3);
    
    // await inventory.sort(2);
    // await inventory.gotoCart();
    
    // const cart = new cartPage(page);
    // await page.waitForTimeout(1000);
    // await cart.goto();
    // await page.waitForTimeout(1000);
    // await cart.removeItem(0);
    // await page.waitForTimeout(1000);
    // await cart.gotoCheckout();
    // await cart.gotoInventory();


    // const checkout = new CheckoutPage(page);
    // await checkout.goto();
    // await checkout.fillFirstName('Moishy');
    // await checkout.fillLastName('Berger');
    // await checkout.fillZipCode();
    // await checkout.continue();
    


    // await browser.close();
})();