import { Variants } from 'framer-motion';
import * as S from './styles';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

export type TCardTriggered = {
    children: ReactNode;
    y?: number;
};

export function CardTriggered({ children, y = 50 }: TCardTriggered) {
    const [positionY, setPositionY] = useState(y);

    const onClickCard = () => {
        setPositionY(y + 200);
    };
    const cardVariants: Variants = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: positionY,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };
    return (
        <S.Container>
            <motion.div className="card" variants={cardVariants} onHoverStart={onClickCard} onClick={onClickCard}>
                {children}
            </motion.div>
        </S.Container>
    );
}
