import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { useBlogTheme } from '../../hooks/useBlogTheme';
import * as S from './styles';

export function ButtonToggleTheme() {
  const { toggleTheme } = useBlogTheme();
  return (
    <S.Container>
      <S.Content
        onClick={toggleTheme}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <FaSun />
        <BsMoonStarsFill />
      </S.Content>
    </S.Container>
  );
}
