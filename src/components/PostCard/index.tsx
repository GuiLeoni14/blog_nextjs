import Link from 'next/link';
import { memo } from 'react';
import { PostFragment } from '../../graphql/generated';
import { Heading } from '../Heading';
import { HtmlContent } from '../HtmlContent';
import { ContainerSlug, SlugCategory } from '../Slug';
import * as S from './styles';

function PostCard({ categories, title, cover, excerpt, slug }: PostFragment) {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <S.Container variants={variants}>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image>
                        <img src={cover.url} alt="Imagem do post" />
                    </S.Image>
                </a>
            </Link>
            <S.Text>
                <ContainerSlug>
                    {categories.slice(0, 3).map((category) => (
                        <SlugCategory key={category.id}>{category.name}</SlugCategory>
                    ))}
                </ContainerSlug>
                <Heading as="h6" size="small">
                    {title}
                </Heading>
                <HtmlContent html={`<p>${excerpt}</p>`} />
            </S.Text>
        </S.Container>
    );
}

export default memo(PostCard);
