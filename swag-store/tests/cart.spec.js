import { test, expect } from '@playwright/test';
import CartPage from '../pages/cartPage.js';
import {checkout} from '../locators.js';

test('Remove product from the cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();

    const itemsBefore = await cart.itemCards.count();
    await cart.removeItem(0);

    expect(await cart.itemCards.count()).toEqual(itemsBefore - 1);

})

test('go to checkout', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    
    await cart.gotoCheckout();
    
    await expect(page.locator(checkout.zipInput)).toBeVisible()
    
})