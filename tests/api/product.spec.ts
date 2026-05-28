import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

const url = 'https://fakestoreapi.com/products/1';

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    price: { type: 'number' },
    category: { type: 'string' },
    description: { type: 'string' }
  },
  required: ['id', 'title', 'price', 'category', 'description'],
  additionalProperties: true
};

test('GET product returns expected fields and matches schema', async ({ request }) => {
  const response = await request.get(url);
  console.log('Request URL:', url);

  // Verify status
  expect(response.status()).toBe(200);

  // Parse body
  const body = await response.json();

  // Verify required keys present
  for (const key of ['id', 'title', 'price', 'category', 'description']) {
    expect(Object.prototype.hasOwnProperty.call(body, key)).toBeTruthy();
  }

  // Optional: validate types with Ajv
  const ajv = new Ajv();
  const validate = ajv.compile(productSchema);
  const valid = validate(body);
  if (!valid) {
    console.error('Schema validation errors:', validate.errors);
  }
  expect(valid).toBeTruthy();

  // Log useful product info
  console.log(`Product title: ${body.title}`);
  console.log(`Product price: ${body.price}`);
});
