import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsHouseDoor } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as S from './styles';

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
            <span key={index}>
              {breadcrumb}
              <IoIosArrowForward />
            </span>
          );
        })}
      </div>
      <Link prefetch={false} href="/">
        <span>
          <IoIosArrowBack /> Voltar ao inicio
        </span>
      </Link>
    </S.Container>
  );
}
