import Skeleton from '@mui/material/Skeleton';
import * as S from './styles';

export const SkeletonCardPost = () => {
    return (
        <S.ContainerSkeletonCardPost>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="80%" height={'5rem'} />
                <Skeleton width="50%" height={'2rem'} />
            </div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="60%" height={'5rem'} />
                <Skeleton width="60%" height={'2rem'} />
            </div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="30%" height={'5rem'} />
                <Skeleton width="40%" height={'2rem'} />
            </div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="90%" height={'5rem'} />
                <Skeleton width="100%" height={'2rem'} />
            </div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="10%" height={'5rem'} />
                <Skeleton width="70%" height={'2rem'} />
            </div>
            <div>
                <Skeleton variant="rectangular" width={'100%'} height={'15rem'} style={{ borderRadius: '1rem' }} />
                <Skeleton width="50%" height={'5rem'} />
                <Skeleton width="80%" />
            </div>
        </S.ContainerSkeletonCardPost>
    );
};
