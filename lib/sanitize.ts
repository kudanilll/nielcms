import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(input: string) {
  return DOMPurify.sanitize(input, { USE_PROFILES: { html: true } });
}
