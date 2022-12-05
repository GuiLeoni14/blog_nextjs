import { TStrapiImage } from './strapi-image';

export type TCategory = {
  id: string;
  attributes: {
    name: string;
    slug: string;
    cover: TStrapiImage;
  };
};
