import { FunctionComponent } from 'react';
import { Italic } from './utils/italic';

export const Footer: FunctionComponent = () => (
  <footer className="p-4 mt-12 text-center">
    <p>
      Hecho con ♥️ por <Italic>José Olórtegui</Italic>
    </p>
  </footer>
);
