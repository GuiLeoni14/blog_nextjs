import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Featured } from '../../components/Featured';
import { Get_Page_Content_TextQuery } from '../../graphql/generated';
import { Footer } from '../../layout/Footer';
import { Header } from '../../layout/Header';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export type TBaseTemplateProps = {
    setting: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
    children: React.ReactNode;
    contentPageText?: Get_Page_Content_TextQuery;
};

export function BaseTemplate({ children, setting, posts, contentPageText }: TBaseTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <p>loading..</p>;
    }
    return (
        <S.Container>
            <Header setting={setting} />
            <MainContainer>
                <Breadcrumbs />
                <Featured posts={posts} setting={setting} />
                {children}
            </MainContainer>
            <Footer footer={contentPageText?.footer} />
        </S.Container>
    );
}
