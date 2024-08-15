import { createContext } from 'react';

// currentPath는 현재 브라우저의 경로를 나타냅니다.
// params는 현재 경로에서 추출된 파라미터를 담고 있는 객체입니다.
// setParams는 params 상태를 업데이트하는 함수입니다.
// navigate는 주어진 경로로 브라우저의 URL을 변경하는 함수입니다.
interface RouterContextProps {
  currentPath: string;
  params: { [key: string]: string };
  setParams: (params: { [key: string]: string }) => void;
  navigate: (path: string) => void;
}

// RouterContext는 라우팅 상태와 함수를 관리하고, 이를 컴포넌트 트리 내에서
// 사용할 수 있도록 제공하는 React의 Context 객체입니다.
// 기본값으로 undefined를 설정하여, 이 Context를 제공하지 않은 상태에서의 사용을 방지합니다.
export const RouterContext = createContext<RouterContextProps | undefined>(undefined);
