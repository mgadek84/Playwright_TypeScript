CURRENT GOAL 26.05.2026:

- TO VERIFY CURRENT FRAMEWORK CAPABILITIES AFTER MAJOR CHANGES AND CREATE ALLURE REPORTING

# Playwright + TypeScript

End-to-end tests for [TimeAndMoney_Counter](https://mgadek84.github.io/TimeAndMoney_Counter/) using Playwright and TypeScript.

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm ci
npx playwright install chromium
```

## Run tests

```bash
npm test
npm run test:ui      # interactive UI mode
npm run test:headed  # visible browser
npm run report       # open last HTML report
```

## Structure

| Path | Purpose |
|------|---------|
| `tests/home.spec.ts` | Landing page smoke tests |
| `tests/money.spec.ts` | Cash Burndown flow |
| `tests/time.spec.ts` | Expected Time Left countdown |
| `tests/helpers/app.ts` | Shared navigation helpers |
| `excluded/` | Training specs (not run by default) |

## CI

GitHub Actions runs `npm ci` and `npx playwright test` on push and pull requests.

## Related repos

- App under test: [TimeAndMoney_Counter](https://github.com/mgadek84/TimeAndMoney_Counter)
- Java variant: [Playwright-Java-Maven](https://github.com/mgadek84/Playwright-Java-Maven)
