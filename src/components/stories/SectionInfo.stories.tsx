import { Meta, StoryObj } from '@storybook/react';
import SectionInfo from '../SectionInfo';

const meta: Meta<typeof SectionInfo> = {
    title: 'AniMan/SectionInfo',
    component: SectionInfo,
    argTypes: {
        text: { control: 'text' },
        color: { control: 'color' },
        opacity: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    },
    args: {
        text: 'Інформація про розділ',
        color: '#07006C',
        opacity: 0.12,
    }
};
export default meta;
type Story = StoryObj<typeof SectionInfo>;

export const Default: Story = {
    args: {
        text: "Інформація про розділ",
    },
    parameters: {
        docs: {
            description: { story: 'Базове застосування компонента SectionInfo' }
        }
    }
};

export const GreenBg: Story = {
    args: {
        text: "Виділено зеленим",
        color: "#238B21",
        opacity: 0.2,
    },
};

export const CustomOpacity: Story = {
    args: {
        text: "З високою прозорістю",
        opacity: 0.4,
    },
};