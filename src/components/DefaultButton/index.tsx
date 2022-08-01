import { ReactNode } from 'react';
import * as S from './styles';

export interface IDefaultButtonProps {
    children: ReactNode;
}
export function DefaultButton({ children }: IDefaultButtonProps) {
    return <S.Container>{children}</S.Container>;
}
