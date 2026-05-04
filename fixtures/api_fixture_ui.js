import { test as base,request } from "@playwright/test";

export const test = base.extend ({
    apifx : async ({page},use) =>{
        const context = await request.newContext ({
            baseURL: 'https://jsonplaceholder.typicode.com'
        })
        await use(context);
        await context.dispose();
    }
})