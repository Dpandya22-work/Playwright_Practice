import {test,expect} from '@playwright/test'
import {Todopage} from '../pages/Todopage'

test.describe('ADVANCE LOCATORS',()=>{
    test('Script_1',async({page}) =>{
        const dropdown = page.locator('#dropdown')
        await page.goto('https://the-internet.herokuapp.com/dropdown')
        await dropdown.selectOption('1');
        await expect(dropdown).toHaveValue('1');
    })
    test('Script_2',async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/windows')
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: 'Click Here' }).click()
            
        ]);
        await expect(newPage.getByRole('heading', { name: 'New Window' })).toBeVisible();
        await newPage.close()
    })
    test('Script_3',async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/hovers')
        const img = page.getByRole('img', { name: 'User Avatar' }).first()
        await img.hover()
        await expect(page.getByRole('heading', { name: 'name: user1' })).toBeVisible();
    })
    test('Script_4',async ({page}) =>{
        const todo = new Todopage(page)
        await todo.goto()
        let data = ['Buy groceries', 'Call mom', 'Pay bills']
        let n = 0
        for(const work of data){
            await todo.add(work)
            await page.getByRole('checkbox', { name: 'Toggle Todo' }).nth(n).check()
            n++
        }
        const items = page.getByTestId('todo-item');
        for(const work of data){
            await expect(items.filter({ hasText: work })).toBeVisible();
        }
    })
    test('Script_5',async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')
        await page.getByRole('button',{name:'Start'}).click()
        let loader = page.locator('#loading')
        let text =  page.getByRole('heading', { name: 'Hello World!' })
        await loader.waitFor({ state: 'hidden' });
        await expect(text).toBeVisible()
    })
    test('Script_6',async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/nested_frames')
        const middleFrameSet = page.frameLocator('frame[name="frame-top"]');
        const middleFrame = middleFrameSet.frameLocator('frame[name="frame-middle"]');
        await expect(middleFrame.getByText('MIDDLE')).toBeVisible();
    })
})

