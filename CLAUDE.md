# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (required before first run)
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
```

No test suite is configured.

## Architecture

This is a single-file React app (`src/App.jsx`) with no routing, no external state library, and no backend — all state lives in `useState` hooks inside the one `App` component.

**Known intentional issues (course material):**
- Bug: `amount` is stored as a string, so `totalIncome` and `totalExpenses` use string concatenation instead of numeric addition, producing wrong summary totals.
- Transaction #4 ("Freelance Work") has `type: "expense"` but `category: "salary"` — data inconsistency.
- UI and code quality are intentionally rough; fixing them is part of the course exercises.

**Data shape** — each transaction object:
```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
// amount: stored as string (intentional bug)
```

**Styling** — `src/App.css` for component styles, `src/index.css` for global/reset styles. CSS class names `income-amount`, `expense-amount`, `balance-amount` are shared between the summary cards and the transaction table rows.
