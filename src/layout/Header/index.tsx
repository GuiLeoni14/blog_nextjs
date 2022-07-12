import Link from 'next/link';
import { ButtonToggleTheme } from '../../components/ButtonToggleTheme';
import { InputSearch } from '../../components/InputSearch';
import { MenuMobile } from '../../components/MenuMobile';
import { TSettingsStrapi } from '../../shared-typed/settings-strapi';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export function Header({ setting }: { setting: { data: TSettingsStrapi } }) {
    return (
        <S.Container>
            <MainContainer>
                <Link href="/">
                    <a>
                        <S.Logo>
                            <img
                                src={setting.data.attributes.blogLogo.data.attributes.url}
                                alt={setting.data.attributes.blogLogo.data.attributes.alternativeText}
                            />
                        </S.Logo>
                    </a>
                </Link>
                <InputSearch />
                <ButtonToggleTheme />
                <MenuMobile />
            </MainContainer>
        </S.Container>
    );
}
