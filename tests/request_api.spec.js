import { expect} from '@playwright/test'
import { data } from '../data/api_data';
import {test} from '../fixtures/apiContext'
test.describe('Basics of api testing(REQUEST)',() => {
    const endpoint = 'https://reqres.in/api/products'
    const headers = { 'x-api-key': process.env.API_KEY };
    test('GET REQUEST', async ({ request }) => {
        const response = await request.get(endpoint ,{headers})
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.length).toBe(6)
    });
    test('POST REQUEST', async ({request}) =>{
        const response = await request.post(endpoint ,{ headers, data })
        expect (response.status()).toBe(201)
        const body = await response.json()
        expect(body.email).toBe(data.email)
    })
    test('PUT REQUEST', async ({request}) =>{
        const response = await request.put(`${endpoint}/1 ` ,{ headers,  data: { name: 'Deep Pandya', year: 2026 } })
        const body = await response.json()
        expect(response.status()).toBe(200)
        expect(body.name).toBe('Deep Pandya')
    })
    test('PATCH REQUEST', async ({request}) =>{
        const response = await request.patch(`${endpoint}/1 ` ,{headers,data:{name:'partially updated'}})
        const body = await response.json()
        expect(response.status()).toBe(200)
        expect(body.name).toBe('partially updated')
    })
    test('DELETE REQUEST', async ({request}) =>{
        const response = await request.delete(`${endpoint}/1`,{headers})
        expect(response.status()).toBe(204)
    })

})
