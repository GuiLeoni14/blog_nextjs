import { AccordionSummary, Accordion as MuiAccordion, AccordionDetails } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { Heading } from '../../Heading';
import * as S from './styles';
import Link from 'next/link';
import { GetCategoriesAndAuthorsQuery } from '../../../graphql/generated';

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
                            <Link key={category.id} href={`/category/${category?.slug}`} passHref>
                                <a>
                                    <img src={category.cover.url} />
                                    <Heading as="h6" size="small">
                                        {category?.name}
                                    </Heading>
                                </a>
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
                            <Link key={author.slug} href={`/author/${author?.slug}`} passHref>
                                <a>
                                    <Heading as="h6" size="small">
                                        {author?.name}
                                    </Heading>
                                </a>
                            </Link>
                        ))}
                    </S.Content>
                </AccordionDetails>
            </MuiAccordion>
        </S.Container>
    );
}
