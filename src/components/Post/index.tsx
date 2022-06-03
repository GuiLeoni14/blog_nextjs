import { TPostTag } from '../../shared-typed/tag';
import { ArticleHeader, TArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTags } from '../PostTags';
import { PostTopics } from '../PostTopics';
import * as S from './styles';
export type TPostComponentProps = TArticleHeaderProps & {
    content: string;
    tags?: { data: TPostTag[] };
};
export function Post({ content, cover, createdAt, excerpt, id, title, autor, categories, tags }: TPostComponentProps) {
    return (
        <S.Container>
            <ArticleHeader
                autor={autor}
                categories={categories}
                cover={cover}
                createdAt={createdAt}
                excerpt={excerpt}
                title={title}
                id={id}
            />
            <S.Content>
                <S.LeftContent>
                    <PostTopics searchClassTopics="topics_search" />
                    <PostTags tags={tags?.data} />
                </S.LeftContent>
                <S.RightContent className="topics_search">
                    <HtmlContent html={content} />
                </S.RightContent>
            </S.Content>
        </S.Container>
    );
}
