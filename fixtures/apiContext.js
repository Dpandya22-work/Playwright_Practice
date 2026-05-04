import { test as base, request } from '@playwright/test';

export const test = base.extend ({
    apiContext: async ({page},use) => {
        const context = await request.newContext ({
            baseURL: 'https://reqres.in',
            extraHTTPHeaders:{
                'x-api-key': process.env.API_KEY
            }
        })
        
        await use(context);
        await context.dispose();
    }
})