import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { MainContainer } from '../../styles/container';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTags } from '../PostTags';
import { PostTopics } from '../PostTopics';
import * as S from './styles';
import { useBlogTheme } from '../../hooks/useBlogTheme';
import { PostFragment } from '../../graphql/generated';

export type TPostComponentProps = PostFragment;

function Drawer({ tags }: Pick<PostFragment, 'tags'>) {
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
            <PostTags tags={tags} />
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
export function Post(props: TPostComponentProps) {
  return (
    <S.Container>
      <ArticleHeader {...props} />
      <S.Content>
        <S.LeftContent>
          <PostTopics searchClassTopics="topics_search" />
          <PostTags tags={props.tags} />
        </S.LeftContent>
        <Drawer tags={props.tags} />
        <S.RightContent className="topics_search">
          <HtmlContent html={props.content.html} />
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
}
