import {test, expect} from '@playwright/test';
import LoginPage from "../pages/loginPage.js";
import {inventory} from '../locators.js'

test('error message in incorrect password', async ({page}) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login({password:"123"});
    await expect(login.errorMsg).toBeVisible();
})

test('login success', async ({page}) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login();
    await expect(page.locator(inventory.sortBtn)).toBeVisible();
})