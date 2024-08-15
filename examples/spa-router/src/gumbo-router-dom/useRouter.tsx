import { useContext } from 'react';
import { RouterContext } from './RouterContext';

// useRouter 훅은 RouterContext의 값을 반환하는 커스텀 훅입니다.
// 이 훅을 사용하여 컴포넌트에서 라우팅 상태(currentPath, params 등)에 접근할 수 있습니다.
export const useRouter = () => {
  // useContext 훅을 사용하여 RouterContext에 접근합니다.
  const context = useContext(RouterContext);

  // RouterContext가 존재하지 않는 경우, 즉 useRouter 훅이 RouterProvider 외부에서 호출된 경우
  // 에러를 발생시킵니다. 이는 useRouter 훅이 올바른 컨텍스트 내에서 사용되도록 보장합니다.
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }

  // 정상적으로 RouterContext에 접근한 경우, context 값을 반환합니다.
  // 이 반환값은 currentPath, params, setParams, navigate 등의 라우팅 관련 상태와 함수를 포함합니다.
  return context;
};
