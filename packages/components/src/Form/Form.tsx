import React, { FC, createContext } from 'react';
import { useFormik } from 'formik';
import { FormProps } from './types';
import { Box } from '../Box';
import { Button } from '../Button';

export const FormContext = createContext<ReturnType<typeof useFormik>>(null);

export const Form: FC<FormProps> = ({ children, validations, ...props }) => {
  const formik = useFormik(validations);

  return (
    <FormContext.Provider value={formik}>
      <Box as="form" onSubmit={formik.handleSubmit} {...props}>
        {children}
        <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Submit
        </Button>
      </Box>
    </FormContext.Provider>
  );
};
