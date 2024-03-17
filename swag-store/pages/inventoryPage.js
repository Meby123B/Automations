const { inventory } = require('../locators.js')
const loginPage = require('./loginPage.js')

class inventoryPage {
    constructor(page) {
        this.page = page;

        const { itemBtn, itemCard } = inventory;
        this.itemCards = page.locator(itemCard);
        this.itemBtn = page.locator(itemBtn);

    }

    async goto() {
        const login = new loginPage(this.page);
        await login.goto();
        await login.login();
        console.log('login success');
    }

    async addItem(index = 0) {
        const itemCard = await this.itemCards.nth(index);
        const itemBtn = await itemCard.locator(this.itemBtn);

        // already added
        if (await itemBtn.innerText() === 'Remove') { return; }

        await itemCard.locator(this.itemBtn).click();
    }

    async sort(optionNum = 0) {

    }



}

module.exports = inventoryPage;