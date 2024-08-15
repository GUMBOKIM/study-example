import { createContext } from 'react';

interface RouterContextProps {
  currentPath: string;
  params: { [key: string]: string };
  setParams: (params: { [key: string]: string }) => void;
  navigate: (path: string) => void;
}

export const RouterContext = createContext<RouterContextProps | undefined>(undefined);
