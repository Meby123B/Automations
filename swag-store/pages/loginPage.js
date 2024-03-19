import { domain, login } from '../locators.js';

class LoginPage {

    constructor(page) {
        this.page = page;

        const { usernameInput, passwordInput, loginBtn, errorMsg } = login;
        this.usernameInput = page.locator(usernameInput);
        this.passwordInput = page.locator(passwordInput);
        this.loginBtn = page.locator(loginBtn);
        this.errorMsg = page.locator(errorMsg);
    }

    async goto() {
        await this.page.goto(domain);
    }


    async fillUsername(username = 'standard_user') {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password = 'secret_sauce') {
        await this.passwordInput.fill(password);
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }


    async login(options = {
        username: 'standard_user',
        password: 'secret_sauce'
    }) {
        const { username, password } = options;

        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginBtn();
    }

}

export default LoginPage;