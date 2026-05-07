import { test, expect } from '@playwright/test';

test.describe('Money Counter App', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://mgadek84.github.io/TimeAndMoney_Counter/');
  });

  test('should display some numeric value', async ({ page }) => {
    const body = page.locator('body');
    await expect(body).toContainText(/\d+/);
  });

  test('money value should change over time', async ({ page }) => {
    const body = page.locator('body');

    const initial = await body.innerText();

    await page.waitForTimeout(1500);

    const updated = await body.innerText();

    expect(updated).not.toBe(initial);
  });

  test('input interaction does not break app', async ({ page }) => {
    const input = page.locator('input');

    if (await input.count() > 0) {
      await input.first().fill('100');
      await page.waitForTimeout(600);

      await expect(page.locator('body')).toBeVisible();
    }
  });

});