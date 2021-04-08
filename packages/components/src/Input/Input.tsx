import React, { FC, forwardRef, useContext, useState, useCallback } from 'react';
import { InputProps } from './types';
import { Box } from '../Box';
import { FormContext, SET_FORM_VALUE } from '../Form';

export const Input: FC<InputProps> = forwardRef(({ required, validation, name, ...props }, ref) => {
  const [value, setValue] = useState<string>('');
  const { state, dispatch } = useContext(FormContext);

  const handlerBlur = useCallback(() => {
    let error;

    if (required && value.length === 0) {
      error = 'Required Field';
    }

    if (!error && typeof validation === 'function') {
      error = validation(value);
    }

    dispatch({ type: SET_FORM_VALUE, name, value, error });
  }, [value, dispatch, name, required, validation]);

  const handleChange = useCallback(
    (e) => {
      if (state.errors && state.errors[name]) {
        // TODO: update error state
      }

      setValue(e.target.value);
    },
    [state?.errors, name]
  );

  return (
    <Box
      ref={ref}
      as="input"
      type="text"
      mb={4}
      onBlur={handlerBlur}
      onChange={handleChange}
      value={value}
      {...props}
      __css={{
        display: 'block',
        width: '100%',
        p: 2,
        appearance: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        border: '1px solid',
        borderRadius: 'default',
        color: 'inherit',
        bg: 'transparent',
        boxSizing: 'border-box',
        '::placeholder': {
          color: 'transparent',
        },
      }}
    />
  );
});
