import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Expand "Accounts"' }).click();
  await page.getByRole('button', { name: 'Expand "Reports"' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Sales By Category' }).click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByText('Today').click();
  await page.getByRole('button', { name: 'fetch' }).click();
  await page.getByRole('button').filter({ hasText: 'close' }).click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByText('Last 30 Days').click();
  await expect(page.getByRole('button', { name: 'fetch' })).toBeVisible();
  await page.getByRole('button', { name: 'fetch' }).click();
  await expect(page.getByText('menuHome/Sales By CategoryFY 81-82 AD Dashboard Itemskeyboard_arrow_down All')).toBeVisible();
});