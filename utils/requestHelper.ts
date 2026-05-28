import { APIRequestContext } from '@playwright/test';

export async function fetchJson(request: APIRequestContext, url: string) {
  const res = await request.get(url);
  const body = await res.json();
  return { res, body };
}
