import { useLocation } from './useLocation';

export const useQueryString = (): Record<string, string> => {
  const location = useLocation();

  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const queryObject: Record<string, string> = {};

  params.forEach((value, key) => {
    queryObject[key] = value;
  });

  return queryObject;
};
