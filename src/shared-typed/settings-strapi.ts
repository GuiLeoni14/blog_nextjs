import { TStrapiImage } from './strapi-image';

export type MenuPropsLinks = {
    id: string;
    attributes: {
        link: string;
        newTab?: boolean;
        text: string;
    };
};
export type TSettingsStrapi = {
    attributes: {
        id: string;
        blogName: string;
        blogDescription: string;
        logo: TStrapiImage;
        menuLink: MenuPropsLinks[];
        text: string;
    };
};
