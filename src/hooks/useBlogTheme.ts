import { useContext } from 'react';
import { BlogThemeContext } from '../context/BlogThemeContext';

export const useBlogTheme = () => {
  const { toggleTheme, theme } = useContext(BlogThemeContext);
  return { toggleTheme, theme };
};
