import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage.js';
test.describe('Exercieses', () => {
  test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc');
    });
  test('Ex_1', async ({ page }) => {
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    const check = page.getByRole('checkbox', { name: 'Toggle Todo' })
    await input.fill('Buy groceries')
    await input.press('Enter');
    await check.click();
    await expect(check).toBeChecked();
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('Buy groceries')).toBeVisible();
  })
  test('Assertion', async ({page}) =>{
    let data = ['Buy groceries','Call mom']
    const input = page.getByRole('textbox', { name: 'What needs to be done?' });
    for (const d of data) {
      await input.fill(d);
      await input.press('Enter');
    }
    await expect(page.getByText('2 items left')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Toggle Todo' }).first().check();
    await expect(page.getByRole('checkbox', { name: 'Toggle Todo' }).first()).toBeChecked();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByText('Call mom')).toBeVisible();
    await expect(page.getByText('Buy groceries')).not.toBeVisible();
    
  })
  
})
