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

React app with no routing, no external state library, and no backend. `transactions` state lives in `App` and is passed down to child components.

**Component tree:**
```
App                      — owns transactions state, passes it to children
├── Summary              — receives transactions, computes totalIncome/totalExpenses/balance internally
├── TransactionForm      — owns its own form state, calls onAdd(transaction) prop when submitted
└── TransactionList      — receives transactions, owns filter state internally
```

**Known intentional issues (course material):**
- Transaction #4 ("Freelance Work") has `type: "expense"` but `category: "salary"` — data inconsistency.
- UI and code quality are intentionally rough; fixing them is part of the course exercises.

**Data shape** — each transaction object:
```js
{ id, description, amount, type, category, date }
// type: "income" | "expense"
// category: "food" | "housing" | "utilities" | "transport" | "entertainment" | "salary" | "other"
// amount: number
```

**Styling** — `src/App.css` for component styles, `src/index.css` for global/reset styles. CSS class names `income-amount`, `expense-amount`, `balance-amount` are shared between the summary cards and the transaction table rows.
