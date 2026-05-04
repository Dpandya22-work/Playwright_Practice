import { test as base } from '@playwright/test'

export const test = base.extend({
    loginFx: async ({page},use) =>{
        await page.goto('https://the-internet.herokuapp.com/', {
             waitUntil: 'networkidle' // wait until network is fully idle
        })
        await page.getByRole('link',{name:'Form Authentication'}).click()
        await use(page)
        // console.log('Done')   
    }
})
