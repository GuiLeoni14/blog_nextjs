import { useRouter } from 'next/router';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import Featured from '../../components/Featured';
import { GetPostsAndSettingsQuery } from '../../graphql/generated';
import { Header } from '../../layout/Header';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export type TBaseTemplateProps = GetPostsAndSettingsQuery & {
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
                <Featured posts={posts} />
                {children}
            </MainContainer>
        </S.Container>
    );
}
