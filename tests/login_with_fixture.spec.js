import {expect} from '@playwright/test'
import { test } from '../fixtures/loginFixture'
import data from '../data/testdata_login.json' assert { type: 'json' } 
import {LoginPage} from '../pages/Loginpage'


test.describe('Fixtures', () =>{

    for(let cred of data){
       test(`Test data - ${cred.username} - ${cred.password}`, async ({ loginFx }) => {
            const loginpage = new LoginPage(loginFx) 
            await loginpage.login(cred.username, cred.password);
            await expect(loginFx.getByText(cred.expected)).toBeVisible();
        })
    }
})




