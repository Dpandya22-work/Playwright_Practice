import { test as base } from '@playwright/test'

export const test = base.extend({
    todoFx: async ({page},use) =>{
        await page.goto('https://demo.playwright.dev/todomvc')
        await use(page)
})