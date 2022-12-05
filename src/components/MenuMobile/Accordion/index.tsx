import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { GetCategoriesAndAuthorsQuery } from '../../../graphql/generated';
import { Heading } from '../../Heading';
import * as S from './styles';

export function Accordion({ authors, categories }: GetCategoriesAndAuthorsQuery) {
  return (
    <S.Container>
      <MuiAccordion elevation={0} disableGutters style={{ marginTop: '2rem' }}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown fontSize={'2rem'} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <S.Title>
            <BiCategory />
            <Heading as="h6" size="small">
              Categorias
            </Heading>
          </S.Title>
        </AccordionSummary>
        <AccordionDetails>
          <S.Content>
            {categories?.map((category) => (
              <Link prefetch={false} key={category.id} href={`/category/${category?.slug}`} passHref>
                <Image width={50} height={50} src={category.cover.url} alt="Imagem da categoria" />
                <Heading as="h6" size="small">
                  {category?.name}
                </Heading>
              </Link>
            ))}
          </S.Content>
        </AccordionDetails>
      </MuiAccordion>
      <MuiAccordion elevation={0} disableGutters>
        <AccordionSummary
          expandIcon={<IoIosArrowDown fontSize={'2rem'} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <S.Title>
            <BiCategory />
            <Heading as="h6" size="small">
              Autores
            </Heading>
          </S.Title>
        </AccordionSummary>
        <AccordionDetails>
          <S.Content>
            {authors?.map((author) => (
              <Link prefetch={false} key={author.slug} href={`/author/${author?.slug}`} passHref>
                <Heading as="h6" size="small">
                  {author?.name}
                </Heading>
              </Link>
            ))}
          </S.Content>
        </AccordionDetails>
      </MuiAccordion>
    </S.Container>
  );
}
