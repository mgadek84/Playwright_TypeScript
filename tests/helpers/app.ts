import { type Page } from '@playwright/test';

export const APP_URL = 'https://mgadek84.github.io/TimeAndMoney_Counter/';

export async function openHome(page: Page) {
  await page.goto(APP_URL);
}

export async function openCashBurndown(page: Page) {
  await openHome(page);
  await page.getByRole('button', { name: /Cash Burndown/i }).click();
}

export async function openLifeCounter(page: Page) {
  await openHome(page);
  await page.getByRole('button', { name: /Expected Time Left/i }).click();
}

export async function startCashBurndown(page: Page, monthlyBudget = '10000') {
  await openCashBurndown(page);
  await page.locator('#monthly').fill(monthlyBudget);
  await page.getByRole('button', { name: /Start/i }).click();
}

export async function startLifeCountdown(page: Page, age = '35') {
  await openLifeCounter(page);
  await page.locator('#age').fill(age);
  await page.getByRole('button', { name: /Calculate/i }).click();
}
