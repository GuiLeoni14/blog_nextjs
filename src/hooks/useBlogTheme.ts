import { useContext } from 'react';
import { BlogThemeContext } from '../context/BlogThemeContext';

export const useBlogTheme = () => {
    const { toggleTheme } = useContext(BlogThemeContext);
    return { toggleTheme };
};
