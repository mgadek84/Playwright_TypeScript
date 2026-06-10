# Playwright + TypeScript

E2E test suite for [TimeAndMoney_Counter](https://mgadek84.github.io/TimeAndMoney_Counter/) — Playwright, TypeScript, GitHub Actions CI.

Work in progress; learning in public.

## Setup

```bash
npm ci
npx playwright install chromium
```

## Run

```bash
npm test
npm run test:ui      # interactive mode
npm run test:headed  # visible browser
npm run report       # HTML report
```

## Structure

| Path | Purpose |
|------|---------|
| `tests/home.spec.ts` | Landing page smoke |
| `tests/money.spec.ts` | Cash burndown flow |
| `tests/time.spec.ts` | Time-left countdown |
| `tests/helpers/app.ts` | Shared helpers |
| `excluded/` | Practice specs (not in default run) |

## CI

GitHub Actions runs tests on push and pull requests.

## Related

- [TimeAndMoney_Counter](https://github.com/mgadek84/TimeAndMoney_Counter) — app under test
- [Playwright-Java-Maven](https://github.com/mgadek84/Playwright-Java-Maven) — Java variant
