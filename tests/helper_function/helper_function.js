import {Selector, t, ClientFunction } from 'testcafe';
import LoginPage from '../page_models/login_page'

const loginPage = new LoginPage();

export const scroll = ClientFunction(function() {
    window.scrollBy(0,1500);
});

export async function signIn(user) {
    await t
    .typeText(loginPage.email, user.email)
    .typeText(loginPage.password, user.password)
    .click(loginPage.loginButton);
}