
/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export {};
