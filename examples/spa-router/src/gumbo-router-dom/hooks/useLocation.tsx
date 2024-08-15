import { useRouter } from './useRouter';

export const useLocation = () => {
  const { currentPath } = useRouter();

  return {
    pathname: currentPath,
    search: window.location.search,
  };
};
