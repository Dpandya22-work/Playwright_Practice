import {test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
test.describe('Todo App', () => {
    let todoPage
    let data = ['Buy groceries','Call mom']
    test.beforeEach(async ({ page }) => {
        todoPage = new TodoPage(page);
        await todoPage.goto();
    });

    test('Add and complete a todo', async ({ page }) => {
        let task = 'Buy groceries'
        await todoPage.addTodo(task);
        await todoPage.completeTodo(task)
        await todoPage.clickCompleted();
        await expect(page.getByText(task)).toBeVisible();
    });

    test('Add multiple todos', async ({ page }) => {
        for(let d of data){
            await todoPage.addTodo(d);
        }
        await expect(page.getByText('2 items left')).toBeVisible();
    });
});