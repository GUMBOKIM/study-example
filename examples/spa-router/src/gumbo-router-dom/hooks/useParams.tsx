import { useRouter } from './useRouter';

export const useParams = <T extends { [key: string]: string }>(): T => {
  const { params } = useRouter();
  return params as T;
};
