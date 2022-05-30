import Link from 'next/link';
import { InputSearch } from '../../components/InputSearch';
import { useBlogTheme } from '../../hooks/useBlogTheme';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export function Header({ settings }: { settings: { data: TSettingsStrapi } }) {
    const { toggleTheme } = useBlogTheme();
    return (
        <S.Container>
            <MainContainer>
                <Link href="/">
                    <a>
                        <S.Logo>
                            <img
                                src={settings.data.attributes.blogLogo.data.attributes.url}
                                alt={settings.data.attributes.blogLogo.data.attributes.alternativeText}
                            />
                        </S.Logo>
                    </a>
                </Link>
                <InputSearch />
                <button onClick={toggleTheme}>Alterar tema</button>
            </MainContainer>
        </S.Container>
    );
}
