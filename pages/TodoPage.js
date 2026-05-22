export class Todopage{
    constructor(page){
        this.page = page
        this.work = page.getByRole('textbox', { name: 'What needs to be done?' })  
        this.complete = page.getByRole('checkbox', { name: 'Toggle Todo' })  
        this.completed = page.getByRole('link', { name: 'Completed' })
        this.activebtn = page.getByRole('link', { name: 'Active' })
    }
    async goto(){
        await this.page.goto("https://demo.playwright.dev/todomvc")
    }
    async add(text){
        await this.work.fill(text);
        await this.work.press('Enter');
    }
    async del(){
        const item = this.page.getByRole('listitem').first();
        await item.hover();
        await item.getByRole('button', { name: 'Delete' }).click();
    }
    async done(){
        await this.complete.click()
        //await this.completed.click();
    }
    async clickActive(){
        await this.activebtn.click();
    }
    
}

