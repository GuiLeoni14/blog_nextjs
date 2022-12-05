import { FcCalendar } from 'react-icons/fc';
import { formatDate } from '../../utils/format-date';
import * as S from './styles';

export function DatePost({ date, size = 1.2 }: { date: string; size?: number }) {
  return (
    <S.Container>
      <span>
        <FcCalendar style={{ fontSize: `${size}rem` }} />
        <span style={{ fontSize: `${size}rem` }}>{formatDate(date)}</span>
      </span>
    </S.Container>
  );
}
