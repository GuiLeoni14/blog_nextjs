export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR').slice(0, 10);
};
