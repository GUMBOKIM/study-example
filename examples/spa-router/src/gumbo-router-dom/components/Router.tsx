import { ReactElement, Children, isValidElement } from 'react';
import { useRouter } from '../hooks/useRouter';
import { matchPath } from '../utils';

interface RouterProps {
  children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
  const { currentPath } = useRouter();

  let match: ReactElement | null = null;

  Children.forEach(children, child => {
    if (!match && isValidElement(child)) {
      const { path, exact } = child.props;
      const matched = matchPath(currentPath, path);

      if (matched && (!exact || matched.isExact)) {
        match = child;
      }
    }
  });

  return match;
};
