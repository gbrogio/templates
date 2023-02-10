import { sanitize } from 'isomorphic-dompurify';

export const purifyText = (text: string) => sanitize(text);
