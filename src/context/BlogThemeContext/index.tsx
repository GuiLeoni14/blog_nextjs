import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import { getStorage, postStorage } from '../../utils/storage';
export type TBlogThemeContext = {
    toggleTheme: () => void;
};

export const BlogThemeContext = createContext({} as TBlogThemeContext);
export function BlogThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(dark);

    useEffect(() => {
        const theme_storage: string = getStorage('theme');
        if (theme_storage) {
            setTheme(theme_storage === 'dark' ? dark : light);
        }
    }, []);

    useEffect(() => {
        postStorage({ name: 'theme', values: theme.title });
    }, [theme]);

    const toggleTheme = useCallback(() => {
        console.log('FUI CHAMADO');
        setTheme(theme.title === 'light' ? dark : light);
    }, [setTheme, theme]);

    return (
        <BlogThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BlogThemeContext.Provider>
    );
}
