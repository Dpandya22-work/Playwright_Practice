export class Checkbox{
    constructor(page){
        this.page = page
        this.chk_1 = page.getByRole('checkbox');
        
    }
    async goto(){
        await this.page.goto("https://the-internet.herokuapp.com/checkboxes")
    }
    async isChecked(n){
        await this.chk_1.nth(n).check();
    }
    async untik(n){
       await this.chk_1.nth(n).uncheck();
    }

}