export interface AnyObject {
  [key: string]: any
}

declare global {
  const $ref: typeof import('vue/macros')['$ref']
}
