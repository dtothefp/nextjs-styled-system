import { InputHTMLAttributes } from 'react';
import { BoxProps } from '../Box';

type ValidationFunction = (value: string) => string | null;

export interface InputProps extends InputHTMLAttributes<BoxProps> {
  validation?: ValidationFunction;
  required?: boolean;
  name: string;
}
