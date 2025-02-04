import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.locator('label').filter({ hasText: 'Password' }).locator('i').nth(1).click();
  await page.getByRole('button', { name: 'Login' }).click();
});