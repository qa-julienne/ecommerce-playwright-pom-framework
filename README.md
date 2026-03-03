# E-commerce Playwright POM Framework

A scalable **End-to-End (E2E) Test Automation Framework** for e-commerce applications using **Playwright** with the **Page Object Model (POM)** design pattern.

This repository provides a robust test automation structure using Playwright and JavaScript to help QA engineers write **clean, maintainable, and reusable tests** for web applications.

---

## 🚀 Features

✅ Playwright Test Integration  
✅ Page Object Model (POM) structure for cleaner tests  
✅ Organized test structure (`tests`, `pages`, `utils`)  
✅ Cross-browser testing with Chromium, Firefox, WebKit  
✅ Configured for local and CI environments  
✅ Reusable page objects and utility helpers

---

## 📦 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or above recommended)
- **npm** (v6 or above)
- Optional: VS Code or any JavaScript/TypeScript editor

---

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/qa-julienne/ecommerce-playwright-pom-framework.git
   cd ecommerce-playwright-pom-framework
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

To execute all tests:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

View the HTML test report after execution:

```bash
npx playwright show-report
```

---

## 🗂️ Project Structure

```
📦ecommerce-playwright-pom-framework
├── 📂pages                 # Page Object Model classes
├── 📂tests                 # Playwright test files
├── 📂utils                 # Helpers & utils
├── playwright.config.js    # Playwright config
├── package.json            # npm dependencies & scripts
└── README.md
```

---

## 🧠 Page Object Model (POM)

This framework uses the **Page Object Model pattern**, where each page of the e-commerce application is represented by its own class. Each page class contains locators and actions specific to that page, which keeps your test logic **clean, reusable, and easier to maintain**. ([Playwright][1])

---

## 🧩 Example Test

Below is a conceptual example of how tests interact with page objects:

```javascript
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test("User can login and view product list", async ({ page }) => {
  const login = new LoginPage(page);
  await login.visit();
  await login.login("user@example.com", "password123");

  const home = new HomePage(page);
  await home.verifyProductsVisible();
});
```

Each page object encapsulates selectors and interaction logic so tests stay clean.

---

## 📌 Tips & Best Practices

* Keep tests and page objects focused and reusable
* Tag tests using `@tag` for grouping and filtering
* Use Playwright built-in reporter & trace viewer for debugging
* Integrate tests with CI (e.g., GitHub Actions)

---

## 🤝 Contributing

Contributions, improvements, and bugfixes are welcome! Please open an issue or submit a pull request.

---

## 📜 License

This project is currently unpublished / without specified license (add MIT, Apache-2.0, etc., if desired).

---

Happy testing! 🎯
