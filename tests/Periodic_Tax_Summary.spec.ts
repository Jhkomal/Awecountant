import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.locator('.q-field__append').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Expand "Reports"' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Periodic Tax Summary' }).click();
  await expect(page.getByText('Start DateEnd Datefetch')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Start Date' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByText('Last 7 Days').click();
  await expect(page.getByRole('button', { name: 'fetch' })).toBeVisible();
  await page.getByRole('button', { name: 'fetch' }).click();
  await expect(page.getByText('Start DateEnd DateclosefetchTransaction AmountTax on PurchaseTax on Sales1.')).toBeVisible();
  await expect(page.getByText('3089819.38')).toBeVisible();
});