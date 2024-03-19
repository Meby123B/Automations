import { checkout } from '../locators.js';
import CartPage from './cartPage.js';

class CheckoutPage {

    constructor(page) {
        this.page = page;

        const {
            cancelBtn, continueBtn,
            firstNameInput, lastNameInput, zipInput
        } = checkout;

        this.cancelBtn = page.locator(cancelBtn);
        this.continueBtn = page.locator(continueBtn);
        this.firstNameInput = page.locator(firstNameInput);
        this.lastNameInput = page.locator(lastNameInput);
        this.zipInput = page.locator(zipInput);

    }

    async goto() {
        const cart = new CartPage(this.page);
        await cart.goto();
        await cart.gotoCheckout();
    }

    async fillFirstName(firstName='first') {
        await this.firstNameInput.fill(firstName);
    }
        
    async fillLastName(lastName='last') {
        await this.lastNameInput.fill(lastName);
    }

    async fillZipCode(zipCode='12345') {
        await this.zipInput.fill(zipCode);
    }

    async continue() {
        await this.continueBtn.click();
    }

    async cancel() {
        await this.cancelBtn.click();
    }

    async fillInfoAndContinue() {
        await this.fillFirstName();
        await this.fillLastName();
        await this.fillZipCode();
        await this.continue();
    }
}

export default CheckoutPage;