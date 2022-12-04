import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import light from './light';

export const renderTheme = (children: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={light}>{children}</ThemeProvider>);
};
