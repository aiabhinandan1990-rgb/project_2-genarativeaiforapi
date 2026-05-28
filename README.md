# Playwright API Automation Framework using Generative AI

## Overview

This project demonstrates an AI-assisted API automation testing framework developed using Playwright and Generative AI capabilities.

The framework was designed to accelerate API test development, reduce manual scripting effort, and improve productivity in daily testing activities.

---

## AI-Assisted Test Development Approach

The automation test cases were generated using GitHub Copilot with the help of contextual input provided through:

```text id="m7x2qp"
textcontext/apicontext.txt
```

Prompt for test cases given as below 

```
Generate a Playwright API tests for following scenario

Define the API endpoint URL : 'https://fakestoreapi.com/products/1'
Send a GET request to the endpoint
Verify response status is 200
Validate the response contains these keys: 'id', 'title', 'price', 'category' and 'description'
optionally validate the data types using a JSON Schema (Ajv)
Log the product title and price to the code
```

The API context file was used as a reference to guide Generative AI in creating automation test scenarios.

---

## Test Generation Process

Using the API context reference:

* GitHub Copilot generated API automation test cases
* Tests were executed repeatedly
* Failed scenarios were debugged and re-run until stable execution was achieved
* Once the tests passed successfully, the framework structure was optimized

---

## Framework Refactoring

After successful execution of the generated tests, the framework was reorganized into a clean and maintainable folder structure.

This improved:

* Scalability
* Maintainability
* Reusability
* Readability of the framework

The updated structure was then executed again to validate framework stability and ensure all tests continued to pass successfully.

---

## Productivity Improvement

By leveraging Generative AI with Playwright API automation:

* Faster API automation development
* Reduced manual coding effort
* Rapid test generation
* Faster debugging and stabilization
* Improved daily testing efficiency

### Estimated Impact

This approach helped save approximately:

# 70% of daily testing and automation development time

compared to traditional manual API automation approaches.

---

## Tech Stack

* Playwright
* TypeScript / JavaScript
* GitHub Copilot
* Generative AI Assisted Development
* API Automation Testing

---

## Project Highlights

* AI-assisted API test generation
* Context-driven automation approach
* Automated rerun and stabilization process
* Structured and scalable framework design
* Faster automation delivery

---

## Project Structure

```text id="1v9qmx"
project-root/
│
├── tests/
├── textcontext/
│   └── apicontext.txt
├── utils/
├── config/
└── playwright.config.ts
```

---

## Test Execution

Install dependencies:

```bash id="c4m8wp"
npm install
```

Run API tests:

```bash id="y2q7zn"
npx playwright test
```

---

## Future Enhancements

* CI/CD Integration
* API Schema Validation
* Reporting Dashboard
* Parallel API Execution
* Environment-based Configuration
* AI-assisted self-healing automation

---
## Tests folder
We can add folder/ Gen AI give folder structure for API tests as below 

- `tests/api` - API test specs (e.g., product.spec.ts)
- `tests/helpers` - test helpers and fixtures
- `tests/mocks` - mock responses for unit tests
- `tests/data` - static test data (JSON files)
---

## Author

Developed using Playwright + Generative AI based API automation approach to improve automation productivity and accelerate test delivery.
