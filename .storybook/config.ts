import {
  configure,
  addDecorator,
  setAddon,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as JSXAddon from 'storybook-addon-jsx';

import { infoStyles }  from './styles';

const req = require.context('../stories', true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
setAddon(JSXAddon);
addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: infoStyles,
    header: true,
  }),
);
