import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Dashboard' }).click();
  await expect(page.getByRole('link', { name: 'Add widget' })).toBeVisible();
  await expect(page.locator('#q-app')).toContainText('Sales Amount by Party for last 7 Days');

  await expect(page.getByRole('cell', { name: 'Party Name' }).nth(1)).toBeVisible();
  await page.locator('.q-card').first().click();
  await expect(page.locator('.q-card').first()).toBeVisible();
  await expect(page.locator('div:nth-child(5) > .q-card')).toBeVisible();

});