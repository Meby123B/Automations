import { cart as cartElements } from '../locators.js';
import InventoryPage from './inventoryPage.js';


class CartPage {

    constructor(page) {
        this.page = page;

        const { checkoutBtn, BackToInventoryBtn, itemCard, removeBtn } = cartElements;

        this.checkoutBtn = page.locator(checkoutBtn);
        this.BackToInventoryBtn = page.locator(BackToInventoryBtn);
        this.itemCards = page.locator(itemCard);
        this.removeBtn = page.locator(removeBtn);
    }

    async goto(){
        const inventory = new InventoryPage(this.page);
        await inventory.goto();
        await inventory.addItem(0);
        await inventory.addItem(1);
        await inventory.gotoCart();
    }

    async removeItem(index = 0){
        const itemCard = await this.itemCards.nth(index);
        const removeBtn = await itemCard.locator(this.removeBtn);
        await removeBtn.click();
    }

    async gotoCheckout(){
        await this.checkoutBtn.click();
    }
    async gotoInventory(){
        await this.BackToInventoryBtn.click();
    }
}

export default CartPage;