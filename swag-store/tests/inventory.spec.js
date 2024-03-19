import { test, expect } from '@playwright/test';
import InventoryPage from "../pages/inventoryPage.js";

test('add to cart increment', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();
    await inventory.addItem(0);
    await inventory.addItem(1);
    await inventory.addItem(2);

    await expect(inventory.cartBadge).toHaveText('3');
})

test('validate sort', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();

    let pricesBeforeSort = await inventory.prices.allInnerTexts();
    pricesBeforeSort = pricesBeforeSort.map(remove$sign); 
    pricesBeforeSort.sort((a, b) => Number(a) - Number(b)); //sort with a function

    await inventory.sort(2); // sort by price low to high

    let pricesAfterSort = await inventory.prices.allInnerTexts();
    pricesAfterSort = pricesAfterSort.map(remove$sign);

    expect(pricesBeforeSort).toEqual(pricesAfterSort);
})
 
function remove$sign(price) {
    return price.slice(1);
}