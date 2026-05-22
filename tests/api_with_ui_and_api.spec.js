import {expect} from '@playwright/test'
import {test} from '../fixtures/api_fixture_ui'

test.describe('API AND UI',() =>{
    test('Post', async({apifx})=>{
        const response = await apifx.post('/posts',{data:{ title: 'Deep', body: 'This is my post', userId: 1 } } )
        const body = await response.json()
        expect(body.title).toBe('Deep')
        expect(response.status()).toBe(201)
    })
    test('Verify', async({page}) =>{
        await page.goto('https://jsonplaceholder.typicode.com/posts')
        await expect(page.getByText('sunt aut facere')).toBeVisible();
    })
})

