declare module 'react-router-hash-link' {
    import { LinkProps } from 'react-router-dom';
    import React from 'react';
  
    export interface HashLinkProps extends LinkProps {
      smooth?: boolean;
      scroll?: (element: HTMLElement) => void;
    }
  
    export const HashLink: React.FC<HashLinkProps>;
    export const NavHashLink: React.FC<HashLinkProps>;
  }
  