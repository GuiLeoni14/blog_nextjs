import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return format(date, "EEEE' • 'd' de 'MMMM'", {
        locale: ptBR,
    });
};
