import { ReactNode } from 'react';
import { Footer } from '../../layout/Footer';
import { Header } from '../../layout/Header';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';

import * as S from './styles';

export type TBaseTemplateProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    children: React.ReactNode;
};

export function BaseTemplate({ children }: TBaseTemplateProps) {
    return (
        <S.Container>
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
        </S.Container>
    );
}
