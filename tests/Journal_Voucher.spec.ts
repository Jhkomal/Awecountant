import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.awecountant.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('pramod@awecode.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Expand "Accounts"' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Journal Vouchers' }).click();
  await expect(page.locator('#q-app')).toContainText('New Journal Voucheradd');
  await page.getByRole('cell', { name: 'testing' }).first().click();
  await page.getByRole('link', { name: 'New Journal Voucher' }).click();
  await page.locator('label').filter({ hasText: 'Accountarrow_drop_down' }).locator('i').click();
  await page.getByText('Astra (Payable)').click();
  await page.getByRole('spinbutton', { name: 'Dr. Amount' }).click();
  await page.getByRole('spinbutton', { name: 'Dr. Amount' }).fill('5400');
 
  await page.getByRole('spinbutton', { name: 'Dr. Amount' }).fill('5400');
  await page.getByRole('spinbutton', { name: 'Dr. Amount' }).press('ArrowRight');
  await page.getByText('SNTypeAccountDr AmountCr Amount1DrTypearrow_drop_downAstra (Payable)').click();
  await page.getByRole('button').filter({ hasText: 'delete' }).nth(1).click();

  await page.getByRole('textbox', { name: 'Narration *' }).click();
  await page.getByRole('textbox', { name: 'Narration *' }).fill('testing');
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('arrow_drop_down').nth(1).click();
  await page.getByText('Astra (Receivable)').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('arrow_drop_down').nth(1).click();
  await page.getByText('Basket (Sales)').click();
  
  await page.getByRole('button', { name: 'ADD NEW ROW' }).click();
  await page.locator('label').filter({ hasText: 'Accountarrow_drop_down' }).locator('i').click();
  await page.getByText('Audit Fee Payable').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('textbox', { name: 'Voucher No.' }).click();
  await page.getByRole('textbox', { name: 'Voucher No.' }).fill('786900099');
  await page.getByRole('button', { name: 'Save' }).click();
});