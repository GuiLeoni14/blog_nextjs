import { useEffect } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, TArticleHeaderProps } from '.';
import { useBlogTheme } from '../../hooks/useBlogTheme';

import mock from './mock';

export default {
    title: 'ArticleHeader',
    component: ArticleHeader,
    args: mock,
} as Meta<TArticleHeaderProps>;

export const Light: Story<TArticleHeaderProps> = (args) => {
    return (
        <div>
            <ArticleHeader {...args} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore maxime ad iste illo animi
                veniam facilis explicabo odit consequatur architecto consequuntur laboriosam dolorem corrupti sapiente,
                iusto ipsa quo fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nemo beatae
                illum impedit magnam cupiditate ipsum eaque, quibusdam nihil consequatur aut esse dolore aperiam
                delectus ut. Dolorum alias necessitatibus consequatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Rerum iste veniam repellat aliquid, obcaecati exercitationem tenetur, cupiditate nulla
                voluptates ad inventore neque placeat quo vitae mollitia consequuntur quidem culpa. Eum?
            </p>
        </div>
    );
};
export const Dark: Story<TArticleHeaderProps> = (args) => {
    const { toggleTheme } = useBlogTheme();
    useEffect(() => {
        toggleTheme();
    }, [toggleTheme]);
    return (
        <div>
            <ArticleHeader {...args} />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore maxime ad iste illo animi
                veniam facilis explicabo odit consequatur architecto consequuntur laboriosam dolorem corrupti sapiente,
                iusto ipsa quo fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nemo beatae
                illum impedit magnam cupiditate ipsum eaque, quibusdam nihil consequatur aut esse dolore aperiam
                delectus ut. Dolorum alias necessitatibus consequatur. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Rerum iste veniam repellat aliquid, obcaecati exercitationem tenetur, cupiditate nulla
                voluptates ad inventore neque placeat quo vitae mollitia consequuntur quidem culpa. Eum?
            </p>
        </div>
    );
};
