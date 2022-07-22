import { Get_Page_Content_TextDocument, Get_Page_Content_TextQuery } from '../graphql/generated';
import { client } from './apollo';

export const loadPageContentText = async (): Promise<Get_Page_Content_TextQuery | null> => {
    try {
        const { data } = await client.query({
            query: Get_Page_Content_TextDocument,
        });
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
