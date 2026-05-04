import {expect} from '@playwright/test'
import { test } from '../fixtures/loginFixture'
import data from '../data/testdata_login.json' assert { type: 'json' } 
import {LoginPage} from '../pages/Loginpage'


test.describe('Fixtures', () =>{
    test('Test', async ({loginFx}) =>{
        test.setTimeout(100000); // 100 seconds instead of 30
        await expect (loginFx.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    })

    for(let cred of data){
       test(`Test data - ${cred.username} - ${cred.password}`, async ({ loginFx }) => {
            const loginpage = new LoginPage(loginFx) 
            await loginpage.login(cred.username, cred.password);
            await expect(loginFx.getByText(cred.expected)).toBeVisible();
        })
    }
})




