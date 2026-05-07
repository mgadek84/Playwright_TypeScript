import { test, expect } from '@playwright/test';

test.describe('Time Counter App', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://mgadek84.github.io/TimeAndMoney_Counter/');
  });

  test('should display time counter', async ({ page }) => {

    const counter = page.locator('body');

    await expect(counter).toContainText(/\d{1,2}:\d{2}/);
  });

  test('time should increase after 1 second', async ({ page }) => {
    const body = page.locator('body');

    const initial = await body.innerText();

    await page.waitForTimeout(1200);

    const updated = await body.innerText();

    expect(updated).not.toBe(initial);
  });

  test('page loads without crashing', async ({ page }) => {

    await expect(page.locator('body')).toBeVisible();
  });

});