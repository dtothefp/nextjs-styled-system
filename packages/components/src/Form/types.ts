import { FormHTMLAttributes } from 'react';
import { FormikConfig } from 'formik';
import { BoxProps } from '../Box';

export interface FormProps extends FormHTMLAttributes<BoxProps> {
  validations: FormikConfig<Record<string, unknown>>;
}
