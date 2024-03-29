import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment cover on Post {
    cover {
      data {
        id
        attributes {
          ...image
        }
      }
    }
  }

  fragment tag on Tag {
    name
    slug
  }

  fragment author on Autor {
    name
    slug
  }

  fragment category on Category {
    name
    slug
  }

  fragment tags on Post {
    tags {
      data {
        id
        attributes {
          ...tag
        }
      }
    }
  }

  fragment authorPost on Post {
    autor {
      data {
        id
        attributes {
          ...author
        }
      }
    }
  }

  fragment categories on Post {
    categories {
      data {
        id
        attributes {
          ...category
        }
      }
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment post on Post {
    slug
    title
    excerpt
    content
    allowComments
    createdAt
    ...cover
    ...categories
    ...tags
    ...authorPost
  }

  fragment settings on Setting {
    blogName
    blogDescription
    blogLogo {
      data {
        id
        attributes {
          ...image
        }
      }
    }
    menuLink {
      ...menuLink
    }
    text
  }
  fragment pagination on Pagination {
    total
    page
    pageSize
    pageCount
  }
`;
