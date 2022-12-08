import { PostFragment } from '../../graphql/generated';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostTags } from '../PostTags';
import { PostTopics } from '../PostTopics';
import { PostDrawer } from './Drawer';
import * as S from './styles';

export type TPostComponentProps = PostFragment;

export function Post(props: TPostComponentProps) {
  return (
    <S.Container>
      <ArticleHeader {...props} />
      <S.Content>
        <S.LeftContent>
          <PostTopics searchClassTopics="topics_search" />
          <PostTags tags={props.tags} />
        </S.LeftContent>
        <PostDrawer tags={props.tags} />
        <S.RightContent className="topics_search">
          <HtmlContent html={props.content.html} />
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
}
