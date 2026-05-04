import {test,expect} from "@playwright/test"
import { Todopage_2 } from "../pages/Todopage_2"


test.describe( 'TODO',() => {
    let login
    let data = ['Buy groceries','Call mom']
    test.beforeEach( async ({page}) =>{
        login = new Todopage_2(page);
        await login.goto()
    })
    test('First_script' ,async({page}) =>{
        await login.add('Buy groceries')
        await login.del();
        await expect(page.getByTestId('todo-title')).not.toBeVisible(); // ✅
    })
    test('Second_Script', async ({page}) => {
        await login.add('Call mom')
        await login.done();
        await expect(page.getByText('Call mom')).toBeVisible(); 
    })
    test('Third_Script', async ({page}) => {
        
        for(const d of data ){
            await login.add(d)
        }
        await login.clickActive()
        await expect(page.getByText('2 items left')).toBeVisible();
      
    })
})

