import { Meta, StoryObj } from '@storybook/react';
import {
  CatalogDecorator,
  CatalogDimension,
  CatalogOptions,
  CatalogStory,
  ComponentDecorator,
  MAIN_COLOR_NAMES,
  ThemeColor,
} from 'twenty-ui';

import { MenuItemSelectTag } from '@/ui/navigation/menu-item/components/MenuItemSelectTag';

const meta: Meta<typeof MenuItemSelectTag> = {
  title: 'UI/Navigation/MenuItem/MenuItemSelectTag',
  component: MenuItemSelectTag,
};

export default meta;

type Story = StoryObj<typeof MenuItemSelectTag>;

export const Default: Story = {
  args: {
    color: 'green',
    text: 'Menu item select tag text',
  },
  argTypes: { className: { control: false } },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof MenuItemSelectTag> = {
  args: { text: Default.args?.text },
  argTypes: { ...Default.argTypes },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'], focus: ['.focus'] },
    catalog: {
      dimensions: [
        {
          name: 'color',
          values: MAIN_COLOR_NAMES,
          props: (color: ThemeColor) => ({ color }),
          labels: (color: ThemeColor) => color,
        },
        {
          name: 'states',
          values: ['default', 'hover', 'selected', 'hover+selected'],
          props: (state: string) => {
            switch (state) {
              case 'default':
                return {};
              case 'hover':
                return { className: 'hover' };
              case 'selected':
                return { selected: true };
              case 'hover+selected':
                return { className: 'hover', selected: true };
              default:
                return {};
            }
          },
        },
      ] as CatalogDimension[],
      options: {
        elementContainer: {
          width: 250,
        },
      } as CatalogOptions,
    },
  },
  decorators: [CatalogDecorator],
};