# Playwright API Automation Framework using Generative AI


## AI-Assisted Test Development Approach

The automation test cases were generated using GitHub Copilot with the help of contextual input provided through:

```text id="m7x2qp"
textcontext/apicontext.txt
```
Prompt for test case given as below -

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




