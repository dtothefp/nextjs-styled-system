import { FormHTMLAttributes, FormEvent } from 'react';
import { OptionalObjectSchema } from 'yup';
import { BoxProps } from '../Box';

interface Validations {
  initialValues: Record<string, string | number>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  validationSchema: OptionalObjectSchema;
}

export interface FormProps extends FormHTMLAttributes<BoxProps> {
  validations: Validations;
}
