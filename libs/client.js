import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'iyfcp9huv8', 
  apiKey: process.env.API_KEY,
});