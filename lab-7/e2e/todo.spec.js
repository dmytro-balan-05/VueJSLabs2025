import { test, expect } from '@playwright/test'

test('full todo cycle', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Лабораторна робота №7')).toBeVisible()

    await page.getByTestId('todo-input').fill('Здати лабораторну')
    await page.getByTestId('add-btn').click()

    await expect(page.getByText('Здати лабораторну')).toBeVisible()

    await page.getByText('Здати лабораторну').click()
    const todoItem = page.locator('.todo-item').filter({ hasText: 'Здати лабораторну' })
    await expect(todoItem).toHaveClass(/completed/)

    await page.getByRole('button', { name: 'Активні' }).click()
    await expect(page.getByText('Здати лабораторну')).toBeHidden()

    await page.getByRole('button', { name: 'Виконані' }).click()
    await expect(page.getByText('Здати лабораторну')).toBeVisible()

    await page.getByRole('button', { name: 'Всі' }).click()
    await expect(page.getByText('Здати лабораторну')).toBeVisible()

    await page.getByRole('button', { name: 'x' }).click()

    await expect(page.getByText('Здати лабораторну')).toBeHidden()

    await page.screenshot({ path: 'screenshots/lab7-full-cycle.png' })
})