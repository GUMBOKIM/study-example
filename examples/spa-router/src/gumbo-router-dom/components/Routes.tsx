import { ReactElement, Children, isValidElement } from 'react';
import { useRouter } from '../useRouter';
import { matchPath } from '../utils';

interface RoutesProps {
  children: React.ReactNode;
}

// Routes 컴포넌트는 전달된 자식 컴포넌트 중 현재 경로와 매칭되는 첫 번째 Route 컴포넌트를 렌더링합니다.
export const Routes = ({ children }: RoutesProps) => {
  // useRouter 훅을 사용하여 현재 라우팅 상태에서 현재 경로를 가져옵니다.
  const { currentPath } = useRouter();

  // match 변수는 매칭된 Route 컴포넌트를 저장합니다. 초기값은 null입니다.
  let match: ReactElement | null = null;

  // Children.forEach를 사용하여 전달된 자식 컴포넌트들을 순회합니다.
  Children.forEach(children, child => {
    // 아직 매칭된 컴포넌트가 없고, 현재 순회 중인 child가 유효한 React 엘리먼트일 경우에만 진행합니다.
    if (!match && isValidElement(child)) {
      // child의 props에서 path와 exact 값을 추출합니다.
      const { path, exact } = child.props;

      // 현재 경로와 child의 path를 비교하여 매칭 여부를 확인합니다.
      const matched = matchPath(currentPath, path);

      // 매칭이 성공하면, exact가 true인 경우 경로가 정확히 일치해야 하고,
      // 그렇지 않은 경우 부분적으로 일치해도 매칭된 것으로 간주합니다.
      if (matched && (!exact || matched.isExact)) {
        // 매칭된 컴포넌트를 match 변수에 저장합니다.
        match = child;
      }
    }
  });

  // 매칭된 Route 컴포넌트가 있다면 이를 렌더링하고, 그렇지 않으면 null을 반환합니다.
  return match;
};
