import { storiesOf } from '@storybook/react';
import Colors from './stories/colors';
import Spacings from './stories/spacings';
import TextStyles from './stories/text-styles';
import ComponentSizes from './stories/component-sizes';

storiesOf('Foundation', module)
  .addParameters({ options: { showPanel: false } })
  .add('Colors', Colors)
  .add('Text Styles', TextStyles)
  .add('Spacings', Spacings)
  .add('Component sizes', ComponentSizes);
