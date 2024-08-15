import { useState, useEffect } from 'react';
import { RouterContext } from './RouterContext';
import { matchPath } from './utils';

interface RouterProviderProps {
  children: React.ReactNode;
}

// RouterProvider 컴포넌트는 라우팅 상태를 관리하고, 이를 하위 컴포넌트에 제공하는 역할을 합니다.
export const RouterProvider = ({ children }: RouterProviderProps) => {
  // currentPath 상태는 현재 URL 경로를 나타내며, 초기 값으로 window.location.pathname을 사용합니다.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // 초기 params 값을 현재 경로를 바탕으로 계산합니다. matchPath를 사용하여 초기 경로의 파라미터를 추출합니다.
  const initialParams = matchPath(currentPath, currentPath)?.params || {};

  // params 상태는 현재 경로에서 추출된 파라미터들을 관리합니다.
  const [params, setParams] = useState<{ [key: string]: string }>(initialParams);

  // useEffect 훅을 사용하여 브라우저의 경로 변경(popstate 이벤트)을 감지합니다.
  useEffect(() => {
    // 브라우저 뒤로 가기, 앞으로 가기 등의 동작으로 경로가 변경되었을 때 실행될 함수입니다.
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname); // 현재 경로를 업데이트합니다.
    };

    // popstate 이벤트에 onLocationChange 핸들러를 추가합니다.
    window.addEventListener('popstate', onLocationChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []); // 빈 배열을 의존성으로 하여, 컴포넌트가 처음 마운트될 때 한 번만 실행되도록 합니다.

  // navigate 함수는 주어진 경로로 이동하며, 브라우저의 history를 업데이트합니다.
  const navigate = (path: string) => {
    window.history.pushState({}, '', path); // 브라우저의 URL을 변경하지만 페이지를 새로고침하지 않습니다.
    setCurrentPath(path); // currentPath 상태를 업데이트하여 UI를 갱신합니다.
  };

  // RouterContext.Provider를 통해 currentPath, params, setParams, navigate 함수를 하위 컴포넌트에 제공함으로써,
  // 라우팅 상태를 전역적으로 관리하고 사용할 수 있도록 합니다.
  return (
      <RouterContext.Provider value={{ currentPath, params, setParams, navigate }}>
        {children}
      </RouterContext.Provider>
  );
};
