import { useRouter } from '../useRouter';

// useLocation 훅은 현재 URL의 경로와 쿼리 문자열을 반환하는 훅입니다.
// 이 훅은 컴포넌트가 현재 경로와 쿼리 파라미터에 쉽게 접근할 수 있도록 도와줍니다.
export const useLocation = () => {
  // useRouter 훅을 사용하여 현재 라우팅 상태를 가져옵니다.
  const { currentPath } = useRouter();

  // 현재 경로(pathname)와 쿼리 문자열(search)을 객체로 반환합니다.
  // - pathname: 브라우저의 현재 경로 (예: "/user/1")
  // - search: 브라우저의 쿼리 문자열 (예: "?name=John")
  return {
    pathname: currentPath,
    search: window.location.search,
  };
};
