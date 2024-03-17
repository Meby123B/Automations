const { chromium } = require('playwright');
const locator = require('./locators.js');
const loginPage = require('./pages/loginPage.js');
const inventoryPage = require('./pages/inventoryPage.js');


(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    // const login = new loginPage(page);
    // await login.goto();
    // await login.login();
    
    const inventory = new inventoryPage(page);
    await inventory.goto();
    await inventory.addItem(1);
    await inventory.addItem(1);
    await inventory.addItem(2);
    await inventory.addItem(3);


    // await browser.close();
})();