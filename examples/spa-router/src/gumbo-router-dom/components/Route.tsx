import { useEffect, ComponentType } from 'react';
import { useRouter } from '../useRouter';
import { matchPath } from '../utils';

// path는 매칭할 경로 패턴을 나타냅니다.
// component는 매칭된 경로에 따라 렌더링할 React 컴포넌트입니다.
// exact는 경로가 정확히 일치해야만 매칭되도록 하는 선택적 속성입니다.
interface RouteProps {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

// Route 컴포넌트는 주어진 경로가 현재 경로와 매칭될 때, 해당 컴포넌트를 렌더링합니다.
export const Route = ({ path, component: Component, exact = false }: RouteProps) => {
  // useRouter 훅을 사용하여 현재 라우팅 상태를 가져옵니다.
  const { currentPath, params, setParams } = useRouter();

  // matchPath 함수를 사용하여 현재 경로와 지정된 경로 패턴(path)을 매칭합니다.
  const match = matchPath(currentPath, path);

  // useEffect 훅을 사용하여 경로가 매칭될 때 params를 업데이트합니다.
  useEffect(() => {
    if (match && (!exact || match.isExact)) {
      // 기존 params와 새로운 match.params를 비교하여 다를 경우에만 setParams를 호출하여 상태를 업데이트합니다.
      if (JSON.stringify(params) !== JSON.stringify(match.params)) {
        setParams(match.params);
      }
    }
  }, [currentPath, path, exact, match, params, setParams]);

  // 경로가 매칭되지 않거나, exact가 true이고 정확히 일치하지 않을 경우 컴포넌트를 렌더링하지 않습니다.
  if (!match || (exact && !match.isExact)) return null;

  // 경로가 매칭되면 해당 컴포넌트를 렌더링하며, 경로 파라미터를 props로 전달합니다.
  return <Component />;
};
