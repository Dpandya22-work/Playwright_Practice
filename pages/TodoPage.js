export class TodoPage {
    constructor(page){
        this.page = page;
        this.input = page.getByRole('textbox', { name: 'What needs to be done?' });
        this.check = page.getByRole('checkbox', { name: 'Toggle Todo' })
        this.activeFilter = page.getByRole('link', { name: 'Active' });
        this.completedFilter = page.getByRole('link', { name: 'Completed' });
        this.itemsLeft = page.getByRole('link', { name: 'Active' });
    }
    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodo(text) {
        await this.input.fill(text);
        await this.input.press('Enter');
       
    }

    async completeTodo(text) {
        await this.page.getByRole('listitem').filter({ hasText: text }).getByLabel('Toggle Todo').check();
        
    }

    async clickActive() {
        await this.activeFilter.click();
    }

    async clickCompleted() {
        await this.completedFilter.click();
    }
}

