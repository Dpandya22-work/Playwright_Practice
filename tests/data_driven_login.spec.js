import {test, expect} from '@playwright/test'
import creds from "../data/testdata_login.json" assert { type: 'json' }
import { LoginPage } from "../pages/Loginpage"
import {users} from "../data/testdata_login"

test.describe('data_driven', () =>{
    let loginpage
    test.beforeEach(async({page}) =>{
        loginpage = new LoginPage(page)
        await loginpage.goto()

    })
    //using data from test data file
    test('validlogin', async ({ page }) => {
        await loginpage.login(users.validUser.username, users.validUser.password);
        await expect(page.getByText(users.validUser.message)).toBeVisible();
    })
    test('invalidpassword', async ({ page }) => {
        await loginpage.login(users.invalidPassword.username, users.invalidPassword.password);
        await expect(page.getByText(users.invalidPassword.message)).toBeVisible();
    });
    test('invalidusername', async ({ page }) => {
        await loginpage.login(users.invalidUsername.username, users.invalidUsername.password);
        await expect(page.getByText(users.invalidUsername.message)).toBeVisible();
    });
       //using data from json file
    for(let cred of creds){
       test(`Test data - ${cred.username} - ${cred.password}`, async ({ page }) => {
            await loginpage.login(cred.username, cred.password);
            await expect(page.getByText(cred.expected)).toBeVisible();
        })
    }
})
 
