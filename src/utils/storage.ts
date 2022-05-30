export const postStorage = ({ name, values }: { name: string; values: object | string }) => {
    try {
        localStorage.setItem(name, JSON.stringify(values));
    } catch (error) {
        return new Error('Erro ao salvar item');
    }
};

export const getStorage = (name: string) => {
    try {
        const storage_items = localStorage.getItem(name);
        return storage_items ? JSON.parse(storage_items) : false;
    } catch (error) {
        return new Error('Erro ao salvar item');
    }
};
