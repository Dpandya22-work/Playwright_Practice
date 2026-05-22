import {test, expect} from "@playwright/test"
import { Checkbox } from "../pages/Checkbox"
test.describe('Checkbox', () => {
    let chk;
    test.beforeEach(async({page})=>{
        chk = new Checkbox(page);
        await chk.goto()
    })
    test('Script_1', async({page}) =>{
        await chk.isChecked(0)
        await chk.isChecked(1)
        for(let i = 0; i < 2; i++){
             await expect(page.getByRole('checkbox').nth(i)).toBeChecked()
        }
    });
    test('Script_2',async ({page}) =>{
        await chk.uncheck(0)
        await chk.uncheck(1)
        for(let  i = 0; i < 2; i++){
            expect(await page.getByRole('checkbox').nth(i)).not.toBeChecked()
        } 
    })
    test('Script_3',async({page}) =>{
        await chk.isChecked(0)
        await chk.uncheck(1)
        await expect(page.getByRole('checkbox').nth(0)).toBeChecked()
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked()
    })
})