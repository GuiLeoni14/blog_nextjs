import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import * as S from './styles';

export interface IDefaultButtonProps {
  onClickButton?: () => void;
  disabled?: boolean;
  messageOnClickDisabled?: string;
  isLoading?: boolean;
  children: ReactNode;
}
export function DefaultButton({
  children,
  disabled = false,
  onClickButton,
  isLoading = false,
  messageOnClickDisabled = 'Sem posts para carregar',
}: IDefaultButtonProps) {
  const handleCLickButton = () => {
    if (disabled || isLoading) {
      toast.warning(messageOnClickDisabled, {
        position: 'top-center',
      });
      return;
    }
    onClickButton?.();
  };
  return (
    <S.Container onClick={handleCLickButton} className={`${disabled && 'disabled'}`}>
      {children}
      <S.LoadingImage
        showContent={isLoading}
        src="/images/loading.gif"
        alt="ícone de loading simbolizando o carregamento do input"
      />
    </S.Container>
  );
}
