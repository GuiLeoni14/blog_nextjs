import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { GetPostsAndSettingsQuery, SeoFragment } from '../../graphql/generated';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import { MainContainer } from '../../styles/container';
import { defaultValuesSeo } from '../../utils/defaultValuesSeo';
import * as S from './styles';

export type TBaseTemplateProps = Pick<GetPostsAndSettingsQuery, 'setting'> & {
    seo?: SeoFragment;
    children: React.ReactNode;
};

export function BaseTemplate({ children, setting, seo }: TBaseTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <p>loading..</p>;
    }
    return (
        <S.Container>
            {seo && (
                <NextSeo
                    title={seo.title}
                    description={seo.description}
                    additionalMetaTags={[
                        {
                            name: 'keywords',
                            content: seo.keywords,
                        },
                    ]}
                    {...defaultValuesSeo}
                />
            )}
            <Header setting={setting} />
            <MainContainer>
                <Breadcrumbs />
                {children}
            </MainContainer>
            <Footer setting={setting} />
        </S.Container>
    );
}
