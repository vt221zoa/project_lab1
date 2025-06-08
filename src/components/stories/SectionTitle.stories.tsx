import { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '../SectionTitle';

const meta: Meta<typeof SectionTitle> = {
    title: 'AniMan/SectionTitle',
    component: SectionTitle,
    argTypes: {
        text: { control: 'text' },
        color: { control: 'color' },
        opacity: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
        type: {
            control: { type: 'select' },
            options: ['anime', 'manga'],
        },
    },
    args: {
        text: 'Зараз на екранах',
        color: '#07006C',
        opacity: 0.12,
        type: 'anime',
    },
};
export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const AnimeDefault: Story = {
    args: {
        text: "Зараз на екранах",
        type: "anime",
    },
};

export const MangaCustomColor: Story = {
    args: {
        text: "Зараз випускаються",
        type: "manga",
        color: "#238B21",
        opacity: 0.15,
    },
};

export const CustomOpacity: Story = {
    args: {
        text: "Тест із більшою прозорістю",
        opacity: 0.3,
    },
};