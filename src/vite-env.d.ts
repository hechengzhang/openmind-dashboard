/// <reference types="vite/client" />
declare module 'rollup-plugin-terser'

declare module "*.svg?react" {
  import { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module '*.riv' {
  const content: any;
  export default content;
}