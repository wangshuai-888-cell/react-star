declare module '*.less' {
  export default classes as { readonly [key: string]: string };
}

declare module '*.svg' {
  export default src as string;
}

declare module '*.svg?component' {
  export default src as string;
}
