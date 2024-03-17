const { chromium } = require('playwright');
const loginPage = require('./pages/loginPage.js');


(async () => {
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();

    const login = new loginPage(page);
    await login.goto();
    await login.fillUsername();
    await login.fillPassword();

    await browser.close();
})();