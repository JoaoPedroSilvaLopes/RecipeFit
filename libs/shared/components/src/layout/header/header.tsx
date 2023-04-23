import { HeaderProps } from '../..';
import * as S from './header.styles';

const Header: React.FC<HeaderProps> = ({ title, actions }) => {
  return (
    <S.Container>
      <S.ActionGroup>
        {actions && <>{actions.map((action, index) => action)}</>}
      </S.ActionGroup>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
