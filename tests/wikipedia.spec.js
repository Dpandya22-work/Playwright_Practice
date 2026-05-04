import { test, expect } from '@playwright/test';

test.describe('First Script', () => {
    let link = "https://wikipedia.org"

    test('Navigation', async ({page}) => {
        await page.goto(link);
        await expect(page.getByRole('heading',{name:'Wikipedia'})).toBeVisible();
    })
    test('Searching...', async( {page}) =>{
        await page.goto(link);
        await page.getByRole('searchbox',{name: 'Search Wikipedia'}).fill('Playwright (software)');
        await page.keyboard.press('Enter');
        await expect(page.locator('#firstHeading').getByText('Playwright (software)')).toBeVisible();
    })
});
