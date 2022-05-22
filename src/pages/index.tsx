import { useEffect } from 'react';
import styled from 'styled-components';
import { loadPosts } from '../api/loadPosts';

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;

export default function Home() {
    useEffect(() => {
        loadPosts().then((response) => console.log(response));
    }, []);
    return <Title>My page</Title>;
}
