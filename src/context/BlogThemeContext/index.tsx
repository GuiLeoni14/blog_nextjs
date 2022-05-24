import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
export type TBlogThemeContext = {
    toggleTheme: () => void;
};
export const BlogThemeContext = createContext({} as TBlogThemeContext);
export function BlogThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <BlogThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BlogThemeContext.Provider>
    );
}
