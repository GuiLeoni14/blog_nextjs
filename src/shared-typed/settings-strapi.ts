import { StrapiImage } from './strapi-image';

export type MenuPropsLinks = {
    id: string;
    link: string;
    newTab?: boolean;
    text: string;
};
export type SettingsStrapi = {
    data: {
        attributes: {
            id: string;
            blogName: string;
            blogDescription: string;
            logo: StrapiImage;
            menuLink: MenuPropsLinks[];
            text: string;
        };
    };
};
