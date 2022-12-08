import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { PostFragment } from '../../../graphql/generated';
import { useBlogTheme } from '../../../hooks/useBlogTheme';
import { MainContainer } from '../../../styles/container';
import { PostTags } from '../../PostTags';
import { PostTopics } from '../../PostTopics';
import * as S from './styles';

export function PostDrawer({ tags }: Pick<PostFragment, 'tags'>) {
  const [open, setOpen] = useState(false);
  const { theme } = useBlogTheme();
  const matches = useMediaQuery(`${theme.media.lteMedium}`);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  if (!matches) return null;
  return (
    <>
      <S.Container
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
      </S.Container>
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
