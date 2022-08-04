import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import { getStorage, postStorage } from '../../utils/storage';
export type TBlogThemeContext = {
    toggleTheme: () => void;
    theme: DefaultTheme;
};

export const BlogThemeContext = createContext({} as TBlogThemeContext);
export function BlogThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(light);

    useEffect(() => {
        const theme_storage: string = getStorage('theme');
        if (theme_storage) {
            setTheme(theme_storage === 'dark' ? dark : light);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme.title === 'light' ? dark : light);
        postStorage({ name: 'theme', values: theme.title === 'light' ? 'dark' : 'light' });
    }, [setTheme, theme]);

    return (
        <ThemeProvider theme={theme}>
            <BlogThemeContext.Provider value={{ toggleTheme, theme }}>{children}</BlogThemeContext.Provider>
        </ThemeProvider>
    );
}
