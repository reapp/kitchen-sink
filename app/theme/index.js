import { theme } from 'reapp-kit';
import material from 'reapp-kit/themes/material';
import components from './constants/components';
import styles from './styles';

theme({
  constants: [
    material.constants.colors,
    material.constants.spacing,
    material.constants.typography,
    material.constants.base,
    material.constants.components,
    components
  ],
  styles: [
    material.styles,
    styles
  ],
  animations: [material.animations]
});