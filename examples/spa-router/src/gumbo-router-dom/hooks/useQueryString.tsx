import { useLocation } from './useLocation';

// useQueryString 훅은 현재 URL의 쿼리 문자열을 파싱하여 객체로 반환하는 훅입니다.
// 반환되는 객체는 쿼리 파라미터의 키와 값을 포함합니다.
export const useQueryString = (): Record<string, string> => {
  // useLocation 훅을 사용하여 현재 URL의 경로 정보를 가져옵니다.
  const location = useLocation();

  // location.search는 현재 URL의 쿼리 문자열을 포함합니다.
  const queryString = location.search;

  // URLSearchParams 객체를 사용하여 쿼리 문자열을 파싱합니다.
  const params = new URLSearchParams(queryString);

  // queryObject는 쿼리 파라미터의 키-값 쌍을 저장하는 객체입니다.
  const queryObject: Record<string, string> = {};

  // params.forEach를 사용하여 모든 쿼리 파라미터를 순회하면서 queryObject에 저장합니다.
  params.forEach((value, key) => {
    queryObject[key] = value;
  });

  // 쿼리 파라미터 객체를 반환합니다. 이 객체는 쿼리 문자열의 모든 키-값 쌍을 포함합니다.
  return queryObject;
};
