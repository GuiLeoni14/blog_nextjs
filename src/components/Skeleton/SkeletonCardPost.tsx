import Skeleton from '@mui/material/Skeleton';
import { MainContainer } from '../../styles/container';
import * as S from './styles';

export const SkeletonCardPost = ({ pageTypeSkeleton = 'POST' }: { pageTypeSkeleton?: 'POST' | 'TEMPLATE_POST' }) => {
    return (
        <S.ContainerSkeletonCardPost pageTypeSkeleton={pageTypeSkeleton}>
            <MainContainer>
                {pageTypeSkeleton === 'TEMPLATE_POST' && <Skeleton width="40%" height={'5rem'} className="title" />}
                <div>
                    <div>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'15rem'}
                            style={{ borderRadius: '1rem' }}
                        />
                        <Skeleton width="80%" height={'5rem'} />
                        <Skeleton width="50%" height={'2rem'} />
                    </div>
                    <div>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'15rem'}
                            style={{ borderRadius: '1rem' }}
                        />
                        <Skeleton width="60%" height={'5rem'} />
                        <Skeleton width="60%" height={'2rem'} />
                    </div>
                    <div>
                        <Skeleton
                            variant="rectangular"
                            width={'100%'}
                            height={'15rem'}
                            style={{ borderRadius: '1rem' }}
                        />
                        <Skeleton width="30%" height={'5rem'} />
                        <Skeleton width="40%" height={'2rem'} />
                    </div>
                </div>
            </MainContainer>
        </S.ContainerSkeletonCardPost>
    );
};
