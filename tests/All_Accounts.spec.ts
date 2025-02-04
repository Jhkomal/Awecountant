import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Expand "Accounts"' }).click();
  await page.getByRole('listitem').filter({ hasText: 'All Accounts' }).click();
  await expect(page.getByText('New Accountaddsearch')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'Opening Balances' }).click();
 
  
 
  await page.getByRole('link', { name: 'New Opening Balance' }).click();
  await expect(page.getByText('arrow_drop_down')).toBeVisible();
  await page.getByText('arrow_drop_down').click();
  await page.getByRole('option', { name: 'Astra (Payable)' }).locator('div').nth(2).click();
  await page.getByText('arrow_drop_down').click();
});  