import { useEffect } from 'react';
import { useRouter } from '../hooks/useRouter';
import { matchPath } from '../utils/matchPath';

interface RouteProps {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const Route = ({ path, component: Component, exact = false }: RouteProps) => {
  const { currentPath, params, setParams } = useRouter();
  const match = matchPath(currentPath, path);

  useEffect(() => {
    if (match && (!exact || match.isExact)) {
      // params가 변경될 때만 업데이트
      if (JSON.stringify(params) !== JSON.stringify(match.params)) {
        setParams(match.params);
      }
    }
  }, [currentPath, path, exact, match, params, setParams]);

  if (!match || (exact && !match.isExact)) return null;

  return <Component {...params} />;
};
