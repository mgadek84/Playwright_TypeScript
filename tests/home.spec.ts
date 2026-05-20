import { test, expect } from '@playwright/test';
import { openHome } from './helpers/app';

test.describe('Life & Cash home', () => {
  test.beforeEach(async ({ page }) => {
    await openHome(page);
  });

  test('shows app title and both apps', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Life & Cash/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Cash Burndown/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Expected Time Left/i })).toBeVisible();
  });
});
