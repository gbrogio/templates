export type { HttpFetchOptions } from './fetch';

import { httpFetch } from './fetch';

export const http = {
  ...httpFetch(''),
};
