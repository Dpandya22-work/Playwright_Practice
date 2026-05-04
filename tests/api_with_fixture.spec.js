import {expect} from '@playwright/test'
import {test} from '../fixtures/apiContext'
import { data } from '../data/api_data';

test.describe('API PRAC USING FIXTURES', () =>{
    test('GET',async({apiContext}) =>{
        const response = await apiContext.get('/api/products');
        expect(response.status()).toBe(200);
        const body = await response.json()
        //console.log(body)
        // console.log('Get:done')
    })
    test('POST REQUEST', async ({apiContext}) =>{
        const response = await apiContext.post('/api/products',{ data })
        expect (response.status()).toBe(201)
        const body = await response.json()
        expect(body.email).toBe(data.email)
        // console.log(body)
        // console.log('Post:done')
    })
    test('PUT REQUEST',async ({apiContext}) =>{
        const response = await apiContext.put('/api/products/1',{data: { name: 'Deep Pandya', year: 2026 }} )
        const body = await response.json()
        expect(response.status()).toBe(200)
        expect(body.name).toBe('Deep Pandya')
    } )
    test('PATCH REQUEST', async ({apiContext}) =>{
        const response = await apiContext.patch('/api/products/1' ,{data:{name:'partially updated'}})
        const body = await response.json()
        expect(response.status()).toBe(200)
        expect(body.name).toBe('partially updated')
    })
    test('DELETE REQUEST', async ({apiContext}) =>{
        const response = await apiContext.delete('/api/products/1')
        expect(response.status()).toBe(204)
    })
})