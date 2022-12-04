import Skeleton from '@mui/material/Skeleton';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export const SkeletonPost = () => {
  return (
    <S.ContainerSkeletonPost>
      <MainContainer>
        <Skeleton width="100%" height={'60rem'} className="post" />
        <Skeleton width="100%" height={'2rem'} className="excerpt" />
        <Skeleton width="100%" height={'8rem'} className="excerpt" />
        <Skeleton width="100%" height={'14rem'} className="excerpt" />
        <Skeleton width="100%" height={'3rem'} className="excerpt" />
        <Skeleton width="100%" height={'16rem'} className="excerpt" />
        <Skeleton width="100%" height={'6rem'} className="excerpt" />
        <Skeleton width="100%" height={'8rem'} className="excerpt" />
        <Skeleton width="100%" height={'2rem'} className="excerpt" />
        <Skeleton width="100%" height={'2rem'} className="excerpt" />
      </MainContainer>
    </S.ContainerSkeletonPost>
  );
};
