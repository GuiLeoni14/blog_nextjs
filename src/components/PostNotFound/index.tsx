import Link from 'next/link';
import { DefaultButton } from '../DefaultButton';
import * as S from './styles';

export function PostNotFound() {
  return (
    <S.Container>
      <h1>Ops! Nenhum post encontrado por aqui.</h1>
      <img src="/images/notfound.gif" />
      <div>
        <DefaultButton>
          <Link prefetch={false} href="/">
            Voltar para home
          </Link>
        </DefaultButton>
      </div>
    </S.Container>
  );
}
