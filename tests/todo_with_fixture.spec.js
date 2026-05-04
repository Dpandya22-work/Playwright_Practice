import{expect} from '@playwright/test'
import {test} from '../fixtures/todoFixture'

test('Test', async ({todoFx}) =>{
    await expect (todoFx.getByRole('heading', { name: 'todos' })).toBeVisible();
})

