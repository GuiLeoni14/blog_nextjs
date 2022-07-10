import { AccordionSummary, Accordion as MuiAccordion, AccordionDetails } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { Heading } from '../../Heading';
import * as S from './styles';
import { TCategory } from '../../../shared-typed/category';
import Link from 'next/link';
import { TAuthor } from '../../../shared-typed/author';
export type TAccordionProps = {
    categories: TCategory[];
    autors: TAuthor[];
};
export function Accordion({ categories, autors }: TAccordionProps) {
    return (
        <S.Container>
            <MuiAccordion elevation={0} disableGutters>
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
                        {categories.map((category) => (
                            <Link key={category.id} href={`/category/${category.attributes.slug}`} passHref>
                                <a>
                                    <img src={category.attributes.cover.data.attributes.url} />
                                    <Heading as="h6" size="small">
                                        {category.attributes.name}
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
                        {autors.map((autor) => (
                            <Link key={autor.id} href={`/author/${autor.attributes.slug}`} passHref>
                                <a>
                                    <Heading as="h6" size="small">
                                        {autor.attributes.name}
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
