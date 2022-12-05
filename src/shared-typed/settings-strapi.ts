import { TStrapiImage } from './strapi-image';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};
export type TSettingsStrapi = {
  id: string;
  attributes: {
    blogName: string;
    blogDescription: string;
    blogLogo: TStrapiImage;
    menuLink: MenuPropsLinks[];
    text: string;
  };
};
