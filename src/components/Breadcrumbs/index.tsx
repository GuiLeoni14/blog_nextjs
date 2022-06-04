import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsHouseDoor } from 'react-icons/bs';
import * as S from './styles';
import Link from 'next/link';

export function Breadcrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState([] as string[]);
    useEffect(() => {
        const path_url = window.location.pathname.split('/').filter((path) => path.length > 0);
        setBreadcrumbs(path_url);
    }, []);
    if (breadcrumbs.length < 1) return null;
    return (
        <S.Container>
            <div>
                <BsHouseDoor />
                {breadcrumbs?.map((breadcrumb, index) => {
                    return (
                        <>
                            <span key={index}>{breadcrumb}</span>
                            <IoIosArrowForward />
                        </>
                    );
                })}
            </div>
            <Link href="/">
                <a>
                    <span>
                        <IoIosArrowBack /> Voltar ao inicio
                    </span>
                </a>
            </Link>
        </S.Container>
    );
}
