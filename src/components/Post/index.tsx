import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { TPostTag } from '../../shared-typed/tag';
import { MainContainer } from '../../styles/container';
import { ArticleHeader, TArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTags } from '../PostTags';
import { PostTopics } from '../PostTopics';
import * as S from './styles';
import { useBlogTheme } from '../../hooks/useBlogTheme';

export type TPostComponentProps = TArticleHeaderProps & {
    content: string;
    tags?: { data: TPostTag[] };
};

function Drawer({ tags }: { tags?: { data: TPostTag[] } }) {
    const [open, setOpen] = useState(false);
    const { theme } = useBlogTheme();
    const matches = useMediaQuery(`${theme.media.lteMedium}`);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    if (!matches) return null;
    return (
        <>
            <S.DrawerRoot
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <MainContainer>
                    <S.ContentDrawer isDrawerOpen={open}>
                        <S.DividerHandleToggleDrawer
                            className="divider_close_drawer before"
                            isDrawerOpen={open}
                            onClick={() => setOpen((state) => !state)}
                        ></S.DividerHandleToggleDrawer>
                        <PostTopics searchClassTopics="topics_search" />
                        <PostTags tags={tags?.data} />
                    </S.ContentDrawer>
                </MainContainer>
            </S.DrawerRoot>
            <S.AfterDrawerOpen isDrawerOpen={open}>
                <S.DividerHandleToggleDrawer
                    className="divider_close_drawer_after"
                    onClick={() => setOpen((state) => !state)}
                    isDrawerOpen={open}
                ></S.DividerHandleToggleDrawer>
            </S.AfterDrawerOpen>
        </>
    );
}
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
                <Drawer tags={tags} />
                <S.RightContent className="topics_search">
                    <HtmlContent html={content} />
                </S.RightContent>
            </S.Content>
        </S.Container>
    );
}
