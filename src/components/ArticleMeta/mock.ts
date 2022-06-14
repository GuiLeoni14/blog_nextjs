import { TArticleMetaProps } from '.';

export default {
    author: {
        id: '2',
        attributes: {
            name: 'Guilherme leoni',
            slug: 'guilherme-leoni',
        },
    },
    categories: {
        data: [
            {
                id: '3',
                attributes: {
                    name: 'JavaScript',
                    slug: 'java-script',
                    cover: {
                        data: {
                            id: '11',
                            attributes: {
                                alternativeText: 'imagem_2022-06-11_220947165.png',
                                url: 'https://res.cloudinary.com/dprfxemfh/image/upload/v1654996189/imagem_2022_06_11_220947165_46fff8486f.png',
                            },
                        },
                    },
                },
            },
        ],
    },
    createdAt: '2022-05-20T00:53:24.625Z',
} as TArticleMetaProps;
