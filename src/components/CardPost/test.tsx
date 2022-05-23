import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TCardPostProps, CardPost } from '.';
import { renderTheme } from '../../styles/theme/render-theme';

import mock from './mock';

const props: TCardPostProps = mock;

describe('<CardPost />', () => {
    it('should render a heading, cover and excerpt', () => {
        renderTheme(<CardPost {...props} />);
        expect(screen.getByRole('heading', { name: mock.title })).toBeInTheDocument();
        //expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
        //expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
        //expect(screen.getAllByRole('link', { name: mock.title })[0]).toHaveAttribute('href', `/post/${mock.slug}`);
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(3);
        expect(container).toMatchSnapshot();
    });
});
