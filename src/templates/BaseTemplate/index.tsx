import { useRouter } from 'next/router';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Featured } from '../../components/Featured';
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
};

export function BaseTemplate({ children, setting, posts }: TBaseTemplateProps) {
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
            <Footer />
        </S.Container>
    );
}
