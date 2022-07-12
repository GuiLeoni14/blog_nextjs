import Link from 'next/link';
import { TPostStrapi } from '../../shared-typed/post-strapi';
import { Heading } from '../Heading';
import { HtmlContent } from '../HtmlContent';
import { ContainerSlug, SlugCategory } from '../Slug';
import * as S from './styles';

export type TPostCardProps = TPostStrapi;
export function PostCard({ attributes: { cover, slug, title, excerpt, categories } }: TPostCardProps) {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <S.Container variants={variants}>
            <Link href={`/post/${slug}`}>
                <a>
                    <S.Image>
                        <img src={cover.data.attributes.url} alt={cover.data.attributes.alternativeText} />
                    </S.Image>
                </a>
            </Link>
            <S.Text>
                <ContainerSlug>
                    {categories?.data?.slice(0, 3).map((category) => (
                        <SlugCategory key={category.id}>{category.attributes.name}</SlugCategory>
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
