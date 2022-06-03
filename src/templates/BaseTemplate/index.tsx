import { useRouter } from 'next/router';
import { Featured } from '../../components/Featured';
import { Footer } from '../../layout/Footer';
import { Header } from '../../layout/Header';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export type TBaseTemplateProps = {
    settings: { data: TSettingsStrapi }; // passar settings para o header/footer
    posts?: TPostStrapi[];
    children: React.ReactNode;
};

export function BaseTemplate({ children, settings, posts }: TBaseTemplateProps) {
    const router = useRouter();
    if (router.isFallback) {
        return <p>loading..</p>;
    }
    return (
        <S.Container>
            <Header settings={settings} />
            <MainContainer>
                <Featured posts={posts} settings={settings} />
                {children}
            </MainContainer>
            <Footer />
        </S.Container>
    );
}
