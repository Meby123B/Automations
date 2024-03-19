import {test, expect} from '@playwright/test'
import CheckoutPage from '../pages/checkoutPage'

test('error message when any input is empty', async ({page}) => {
    const checkout = new CheckoutPage(page);
    await checkout.goto();

    await checkout.fillFirstName();
    await checkout.continue();

    await expect(checkout.errorMsg).toBeVisible();
})

test('continue after all fields are filled', async ({page}) => {
    const checkout = new CheckoutPage(page);
    await checkout.goto(); 

    await checkout.fillAll();
    await checkout.continue();

    await expect(page.locator('.title')).toContainText('Overview');
})