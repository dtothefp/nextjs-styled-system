import { BoxProps } from '../Box';

type ValidationFunction = (value: string) => string | null;

export interface InputProps extends BoxProps {
  validation?: ValidationFunction;
  required: boolean;
}
