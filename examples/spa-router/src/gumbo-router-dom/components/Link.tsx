import { ReactNode } from 'react';
import { useRouter } from '../useRouter';

interface LinkProps {
  to: string;
  children: ReactNode;
}

export const Link = ({ to, children }: LinkProps) => {
  const { navigate } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
