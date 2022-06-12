import { AccordionSummary, Accordion as MuiAccordion, AccordionDetails } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { Heading } from '../../Heading';
import * as S from './styles';
import { TCategory } from '../../../shared-typed/category';
import Link from 'next/link';

export function Accordion({ categories }: { categories: TCategory[] }) {
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
                            <Link key={category.id} href={`/category/${category.attributes.slug}`}>
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
                            Categorias
                        </Heading>
                    </S.Title>
                </AccordionSummary>
                <AccordionDetails>
                    <S.Content>
                        {categories.map((category) => (
                            <Link key={category.id} href={`/category/${category.attributes.slug}`}>
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
        </S.Container>
    );
}
