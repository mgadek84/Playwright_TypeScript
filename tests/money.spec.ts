import { test, expect } from '@playwright/test';
import { openCashBurndown, startCashBurndown } from './helpers/app';

test.describe('Cash Burndown', () => {
  test('shows running cash stats after start', async ({ page }) => {
    await startCashBurndown(page, '12000');

    await expect(page.locator('#cashTime')).toContainText(/\d/);
    await expect(page.locator('#cashSpent')).toContainText(/zł/);
    await expect(page.locator('#cashRemaining')).toContainText(/zł/);
  });

  test('spent amount increases while timer runs', async ({ page }) => {
    await startCashBurndown(page, '10000');

    const spent = page.locator('#cashSpent');
    const initial = await spent.innerText();

    await page.waitForTimeout(1500);

    const updated = await spent.innerText();
    expect(updated).not.toBe(initial);
  });

  test('monthly budget input accepts values without breaking app', async ({ page }) => {
    await openCashBurndown(page);

    await page.locator('#monthly').fill('7500');
    await page.getByRole('button', { name: /Start/i }).click();

    await expect(page.locator('#cashTime')).toBeVisible();
    await expect(page.locator('body')).toBeVisible();
  });
});
