import { test, expect } from '@playwright/test';
import { openLifeCounter, startLifeCountdown } from './helpers/app';

test.describe('Expected Time Left', () => {
  test('shows life countdown after calculate', async ({ page }) => {
    await startLifeCountdown(page, '40');

    const counter = page.locator('#lifeCounter');
    await expect(counter).toHaveText(/\d{2}:\d{2}:\d{2}:\d{2}:\d{2}:\d{2}/);
    await expect(page.locator('#yearsLeft')).not.toHaveText('0');
  });

  test('countdown ticks every second', async ({ page }) => {
    await startLifeCountdown(page, '30');

    const counter = page.locator('#lifeCounter');
    const initial = await counter.innerText();

    await page.waitForTimeout(1200);

    const updated = await counter.innerText();
    expect(updated).not.toBe(initial);
  });

  test('life screen loads from menu', async ({ page }) => {
    await openLifeCounter(page);

    await expect(page.getByRole('heading', { name: /Expected Time Left/i })).toBeVisible();
    await expect(page.locator('#age')).toBeVisible();
    await expect(page.getByRole('button', { name: /Calculate/i })).toBeVisible();
  });
});
