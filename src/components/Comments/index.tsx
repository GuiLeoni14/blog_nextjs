import * as S from './styles';
import { DiscussionEmbed } from 'disqus-react';
export type TCommentsProps = {
    id: string;
    slug: string;
    title: string;
    allowComments: boolean;
};

function Comments({ id, slug, title, allowComments }: TCommentsProps) {
    if (!allowComments) return null;
    return (
        <S.Container>
            <DiscussionEmbed
                shortname="blog-guilherme-1"
                config={{
                    url: `/post/${slug}`,
                    identifier: id,
                    title: title,
                    language: 'pt_BR',
                }}
            />
        </S.Container>
    );
}

export default Comments;
