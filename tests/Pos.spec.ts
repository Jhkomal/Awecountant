import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'POS' })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'POS' }).click();
  await page.getByRole('textbox', { name: 'Search Items...' }).click();
  await expect(page.getByRole('textbox', { name: 'Search Items...' })).toBeVisible();
  await page.locator('div').filter({ hasText: 'Particular(s) QtyRateAmountSub Total0Total0CashModeclosearrow_drop_down' }).nth(4).click();
  await page.locator('div').filter({ hasText: /^testitem78add$/ }).locator('i').click();
  await expect(page.getByRole('button', { name: 'Issue' })).toBeVisible();
  await page.getByRole('button', { name: 'Issue' }).click();
  await page.locator('form div').filter({ hasText: 'Particular(s)' }).first().click();

  await expect(page.getByTestId('unit-select').getByText('arrow_drop_down')).toBeVisible();
  await page.getByRole('combobox', { name: 'Unit' }).click();
  await page.getByRole('option', { name: 'ztv85h' }).locator('div').nth(1).click();
  await page.getByRole('spinbutton', { name: 'This field may not be null.' }).click();
  await page.getByRole('spinbutton', { name: 'This field may not be null.' }).fill('78');
  await page.getByRole('combobox', { name: 'Discount' }).click();
  await page.getByRole('option', { name: '%' }).locator('div').nth(1).click();
  await page.getByTestId('row-discount-input').click();
  await page.getByTestId('row-discount-input').fill('10');
  await page.getByTestId('row-tax-select').getByText('arrow_drop_down').click();
  await page.getByRole('option', { name: 'NT', exact: true }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Issue' }).click();
});