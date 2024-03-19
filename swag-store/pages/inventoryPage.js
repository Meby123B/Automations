import { inventory } from '../locators.js';
import LoginPage from './loginPage.js';


class InventoryPage {
    constructor(page) {
        this.page = page;

        const { itemBtn, sortBtn, cartBtn, cartBadge,prices } = inventory;
        this.itemBtn = page.locator(itemBtn);
        this.sortBtn = page.locator(sortBtn);
        this.cartBtn = page.locator(cartBtn);
        this.cartBadge = page.locator(cartBadge);
        this.prices = page.locator(prices);

    }

    async goto() {
        const login = new LoginPage(this.page);
        await login.goto();
        await login.login();
        console.log('login success');
    }

    async addItem(index = 0) {
        const itemBtn = await this.itemBtn.nth(index);

        // already added
        if (await itemBtn.innerText() === 'Remove') { return; }

        await itemBtn.click();
    }

    async sort(optionNum = 0) {
        await this.sortBtn.selectOption({index:optionNum});
    }

    async gotoCart() {
        await this.cartBtn.click();
    }

}

export default InventoryPage;