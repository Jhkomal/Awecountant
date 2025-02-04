import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.locator('label').filter({ hasText: 'Password' }).locator('i').nth(1).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Expand "Items"' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Units' }).click();
  await expect(page.locator('div').filter({ hasText: /^New Unitadd$/ })).toBeVisible();
  await page.getByText('New UnitaddNameShort').click();
  await expect(page.getByRole('cell', { name: 'Short name' })).toBeVisible();
  await expect(page.getByText('New UnitaddNameShort')).toBeVisible();
  await page.getByText('New UnitaddNameShort').click();
  await page.getByRole('link', { name: 'New Unit' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('A');
  await page.getByRole('textbox', { name: 'Name *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Name *' }).fill('Aana');
  await page.getByRole('textbox', { name: 'Short Name' }).click();
  await page.getByRole('textbox', { name: 'Short Name' }).fill('At');
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.locator('tbody')).toContainText('Tola');
  await page.goto('https://demo.awecountant.com/units/list/');
});