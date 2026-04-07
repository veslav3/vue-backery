import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    // Navigate to the login page (assuming the route is /login)
    await page.goto('/login');

    // Make sure we are on the login page
    await expect(page.getByRole('heading', { name: 'Inloggen' })).toBeVisible();

    // Fill in the login form using the exact element IDs from login.vue
    await page.locator('#username').fill('Henk');
    await page.locator('#password').fill('12345');

    // Click the submit button
    await page.getByRole('button', { name: 'Inloggen' }).click();

    // Verify successful login
    // We expect the success view to appear saying "Welkom terug..."
    await expect(page.getByRole('heading', { name: /Welkom terug/i })).toBeVisible();
    await expect(page.locator('.auth-card p')).toContainText('succesvol ingelogd');

    // Verify that the 'Naar Assortiment' button is visible
    await expect(page.locator('text=Naar Assortiment')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');

    await page.locator('#username').fill('WrongUser');
    await page.locator('#password').fill('WrongPass');
    await page.getByRole('button', { name: 'Inloggen' }).click();

    // Verify error message is shown
    await expect(page.locator('.error-msg')).toBeVisible();
  });
});
