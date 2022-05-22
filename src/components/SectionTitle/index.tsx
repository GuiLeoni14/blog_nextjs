import { Container } from './styles';

function SectionTitle({ title, isRed = false }: { title: string; isRed?: boolean }) {
    return (
        <Container isRed={isRed}>
            <h1>{title}</h1>
        </Container>
    );
}

export default SectionTitle;
