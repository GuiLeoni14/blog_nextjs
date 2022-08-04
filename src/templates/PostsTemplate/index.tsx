import { useCallback, useState } from 'react';
import PostGrid from '../../components/PostGrid';
import { SkeletonCardPost } from '../../components/Skeleton';
import { BaseTemplate } from '../BaseTemplate';
import * as S from './styles';
import { PostNotFound } from '../../components/PostNotFound';
import { GetPostsAndSettingsQuery, SeoFragment, useGetPostsAndSettingsQuery } from '../../graphql/generated';
import { DefaultButton } from '../../components/DefaultButton';
import { toast } from 'react-toastify';
import Featured from '../../components/Featured';

export function PostsTemplate({ setting, posts, seo }: GetPostsAndSettingsQuery & { seo?: SeoFragment }) {
    const [statePosts, setStatePosts] = useState(posts);
    const lastPostsId = statePosts[statePosts.length - 1] ? statePosts[statePosts.length - 1].id : '';
    const { data, loading } = useGetPostsAndSettingsQuery({
        variables: { after: lastPostsId, first: 6 },
    });

    const handleMountPostGrid = useCallback(() => {
        return <PostGrid posts={statePosts} />;
    }, [statePosts]);

    const handleMountNewPosts = useCallback(() => {
        if (data && data.posts.length > 0) {
            setStatePosts(data.posts);
        }
        if (data && data.posts.length < 1) {
            toast.warning('Sem posts para carregar', {
                position: 'top-center',
            });
        }
    }, [data]);

    return (
        <BaseTemplate setting={setting} seo={seo}>
            <Featured posts={posts} />
            {statePosts.length > 0 ? (
                <S.Container>
                    <h3>Posts</h3>
                    {data && loading ? <SkeletonCardPost /> : handleMountPostGrid()}
                    <DefaultButton
                        onClickButton={handleMountNewPosts}
                        disabled={(data && data.posts.length < 1) || loading}
                        isLoading={loading}
                    >
                        Carregar mais posts
                    </DefaultButton>
                </S.Container>
            ) : (
                <PostNotFound />
            )}
        </BaseTemplate>
    );
}
