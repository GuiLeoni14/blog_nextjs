import { useRouter } from 'next/router';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';

import * as S from './styles';

export type TBaseTemplateProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    children: React.ReactNode;
};

export function BaseTemplate({ children }: TBaseTemplateProps) {
    const router = useRouter();
    return (
        <S.Container>
            <MainContainer>
                <form action="/search/" method="GET">
                    <S.SearchInput
                        type="search"
                        placeholder="pesquisar por posts"
                        name="q"
                        defaultValue={router?.query?.q || ''}
                    />
                </form>
                {children}
            </MainContainer>
        </S.Container>
    );
}
