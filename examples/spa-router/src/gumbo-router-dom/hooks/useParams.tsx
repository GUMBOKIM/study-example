import { useRouter } from '../useRouter';

// useParams 훅은 현재 경로에서 추출된 파라미터들을 반환하는 훅입니다.
// 제네릭 타입 T를 사용하여 반환되는 파라미터 객체의 타입을 정의할 수 있습니다.
export const useParams = <T extends { [key: string]: string }>(): T => {
  // useRouter 훅을 사용하여 현재 라우팅 상태를 가져옵니다.
  const { params } = useRouter();

  // params 객체를 제네릭 타입 T로 캐스팅하여 반환합니다.
  // 이 params 객체는 현재 경로에서 추출된 파라미터들을 포함하고 있습니다.
  return params as T;
};
