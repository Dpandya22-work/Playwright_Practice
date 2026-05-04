import {test, expect } from '@playwright/test';
import { LoginPage } from "../pages/Loginpage"

test.describe('POM_EXE', () => {
    let loginpage
    test.beforeEach(async ({page}) =>{
        loginpage = new LoginPage(page);
        await loginpage.goto()
    })
   test('validlogin', async ({ page }) => {
        await loginpage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page.getByText('You logged into a secure area')).toBeVisible();
    })
    test('invalidpassword', async ({ page }) => {
        await loginpage.login('tomsmith', 'jhjcbb!');
        await expect(page.getByText('Your password is invalid!')).toBeVisible();
    });
    test('invalidusername', async ({ page }) => {
        await loginpage.login('wronguser', 'SuperSecretPassword!');
        await expect(page.getByText('Your username is invalid!')).toBeVisible();
    });
   
})