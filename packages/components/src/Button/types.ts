import { BoxProps } from '../Box';

export interface ButtonProps extends BoxProps {
  type: 'submit';
  disabled: boolean;
}
