import { useState, useEffect } from 'react';
import { RouterContext } from './RouterContext';
import { matchPath } from './utils/matchPath';

interface RouterProviderProps {
  children: React.ReactNode;
}

export const RouterProvider = ({ children }: RouterProviderProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const initialParams = matchPath(currentPath, currentPath)?.params || {};
  const [params, setParams] = useState<{ [key: string]: string }>(initialParams);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, params, setParams, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
