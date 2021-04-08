import { SET_FORM_VALUE } from './constants';

export interface FormProps {
  onSubmit: (data: {
    isValid?: boolean;
    values?: { [key: string]: string };
    errors?: { [key: string]: string };
  }) => void;
}

export interface ReducerState {
  values: Record<string, string>;
  errors: Record<string, string>;
}

export type ReducerAction = {
  type: typeof SET_FORM_VALUE;
  name: string;
  value: string;
  error?: string;
};
