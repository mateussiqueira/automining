// Este arquivo ajuda a resolver problemas de importação do React

declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export default {} as any;
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: React.ReactFragment;
}