# Playwright Automation Framework

> **A note before you read further:**
> This is my first ever attempt at building anything close to a framework. I come from a manual testing background and this is my initial hands-on effort to learn Playwright from scratch. The tests interact with practice websites like [TodoMVC](https://demo.playwright.dev/todomvc) and [The Internet](https://the-internet.herokuapp.com) — not a real production application. There's a small amount of API testing included too. It's not an over the top, enterprise grade framework — it's an honest first step. I know where it falls short and the next one will be significantly better. But this one does something, and that counts.

A beginner Playwright framework built with **Playwright** and **JavaScript**, covering UI testing, API testing, and CI/CD integration via GitHub Actions.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Playwright | Test automation framework |
| JavaScript | Programming language |
| Node.js | Runtime environment |
| GitHub Actions | CI/CD pipeline |
| dotenv | Environment variable management |

---

## Framework Structure

```
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline
├── data/
│   ├── testdata_login.js           # JS test data object
│   ├── testdata_login.json         # JSON test data for data driven tests
│   └── api_data.js                 # API test data
├── fixtures/
│   ├── apiContext.js               # API request context fixture
│   ├── api_fixture_ui.js           # Combined API + UI fixture
│   └── loginFixture.js             # Login page fixture
├── pages/
│   ├── LoginPage.js                # Login page object
│   ├── TodoPage.js                 # Todo page object
│   └── Todopage_2.js               # Extended todo page object
├── tests/
│   ├── example.spec.js             # Playwright default example tests
│   ├── wikipedia.spec.js           # Wikipedia search tests
│   ├── todo.spec.js                # Todo app POM tests
│   ├── todo_2.spec.js              # Todo app advanced tests
│   ├── login.spec.js               # Login POM tests
│   ├── data_driven_login.spec.js   # Data driven login tests
│   ├── login_with_fixture.spec.js  # Login with fixture tests
│   ├── checkbox.spec.js            # Checkbox tests
│   ├── request_api.spec.js         # API tests using request fixture
│   ├── api_with_fixture.spec.js    # API tests using APIRequestContext
│   ├── api_with_ui_and_api.spec.js # Combined UI + API tests
│   └── adv_locators.spec.js        # Advanced locator scenarios
├── .env                            # Environment variables (not committed)
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies
└── playwright.config.js            # Playwright configuration
```

---

## Features

- **Page Object Model** — locators and actions separated from tests
- **Data Driven Testing** — tests driven by JS objects and JSON files
- **API Testing** — GET, POST, PUT, PATCH, DELETE with assertions
- **Fixtures** — reusable setup and teardown across test files
- **Environment Variables** — credentials managed via `.env` file
- **Advanced Locators** — iframes, multiple tabs, hover, dynamic elements, dropdowns
- **CI/CD** — automated test runs on every push via GitHub Actions
- **Reporting** — HTML report with screenshots, video, and trace on failure

---

## Prerequisites

- Node.js v18 or higher
- npm

---

## Installation

**1. Clone the repository:**
```bash
git clone https://github.com/Dpandya22-ubs/Playwright_Practice.git
cd Playwright_Practice
```

**2. Install dependencies:**
```bash
npm ci
```

**3. Install Playwright browsers:**
```bash
npx playwright install chromium
```

**4. Create `.env` file in root:**
```
API_KEY=your_api_key_here
BASE_URL=https://the-internet.herokuapp.com
```

---

## Running Tests

**Run all tests:**
```bash
npx playwright test
```

**Run on specific browser:**
```bash
npx playwright test --project=chromium
```

**Run specific test file:**
```bash
npx playwright test tests/login.spec.js --project=chromium
```

**Run in headed mode (see browser):**
```bash
npx playwright test --headed
```

**View HTML report:**
```bash
npx playwright show-report
```

---

## Test Categories

| Category | File | Description |
|---|---|---|
| UI Tests | `todo.spec.js`, `login.spec.js` | POM based UI tests |
| Data Driven | `data_driven_login.spec.js` | Login tests driven by JSON data |
| API Tests | `request_api.spec.js` | REST API tests — GET, POST, PUT, PATCH, DELETE |
| API + Fixtures | `api_with_fixture.spec.js` | API tests using reusable APIRequestContext fixture |
| UI + API Combo | `api_with_ui_and_api.spec.js` | Create data via API, verify in UI |
| Advanced Locators | `adv_locators.spec.js` | iframes, tabs, hover, dynamic elements |

---

## CI/CD

Tests run automatically on every push to `main` branch via GitHub Actions.

Pipeline steps:
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Install Playwright browsers
5. Run tests
6. Upload HTML report as artifact

HTML report is available as a downloadable artifact in the Actions tab after every run.

---

## Environment Variables

| Variable | Description |
|---|---|
| `API_KEY` | API key for reqres.in |
| `BASE_URL` | Base URL for login tests |

For CI/CD — secrets are configured in GitHub repository settings under `Settings → Secrets and variables → Actions`.

---

## Author

**Deep Pandya**  
QA Engineer  
[GitHub](https://github.com/Dpandya22-work)
