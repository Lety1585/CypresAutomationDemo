# Cypress Automation Demo

This is a sample automation project built with **Cypress** to demonstrate end-to-end and functional testing for web applications.

![Cypress Tests](https://github.com/Lety1585/CypresAutomationDemo/actions/workflows/cypress-tests.yml/badge.svg)


The tests run against public demo sites:
- [The Internet Herokuapp](https://the-internet.herokuapp.com/login)
- [DemoQA Practice Form](https://demoqa.com/automation-practice-form)

## 🚀 Features
- End-to-end testing
- Web UI & form automation
- Environment config with `cypress.env.json`
- CI/CD ready with GitHub Actions
- Ignores demo site uncaught exceptions for stable runs
- Parameterized tests with reusable test data

## 🧰 Tech Stack
- Cypress 13+
- Node.js
- JavaScript (ES6)
- GitHub Actions

## 🏗️ Installation
```bash
# Clone the repository
git clone https://github.com/Lety1585/CypresAutomationDemo.git

# Navigate to project
cd CypresAutomationDemo

# Install dependencies
npm install

# Open Cypress UI
npm run cypress:open

# Run headless
npm test
