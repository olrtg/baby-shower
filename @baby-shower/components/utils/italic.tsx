import { FunctionComponent } from 'react';

export const Italic: FunctionComponent = ({ children }) => (
  <span className="font-serif italic text-pink-900">{children}</span>
);
