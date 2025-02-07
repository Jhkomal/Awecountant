import { test, expect } from '@playwright/test';
import CategoryPage from '../pages/CategoryPage';
import LoginPage from '../pages/LoginPage';

test('User should be able to create a new category', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const categoryPage = new CategoryPage(page);

    // Navigate to login page
    await loginPage.navigate('https://demo.awecountant.com/');
    await loginPage.login('pramod@awecode.com', 'admin');

    // Navigate to category creation page
    await categoryPage.navigateToAddCategory();

    // Fill in category details
    await categoryPage.fillCategoryDetails('Music System', 'TC987', '8766', 'GST');

    // Submit the form
    await categoryPage.clickCreateButton();

    // Validate successful category creation (adjust selector based on actual page behavior)
    await page.getByText('check_circleSaved').click();
 
});
