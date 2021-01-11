import { storiesOf } from '@storybook/react';
import Colors from './colors';
import Spacings from './spacings';
import TextStyles from './text-styles';
import ComponentSizes from './component-sizes';

storiesOf('Foundation', module)
  .addParameters({ options: { showPanel: false } })
  .add('Colors', Colors)
  .add('Text Styles', TextStyles)
  .add('Spacings', Spacings)
  .add('Component sizes', ComponentSizes);
