import React, { FC, forwardRef, useContext, useCallback } from 'react';
import * as valid from 'card-validator';
import { InputProps } from './types';
import { FormContext } from '../Form';
import { Box } from '../Box';
import { Label } from '../Label';

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const formik = useContext(FormContext);
  const { name } = props;
  const showError = (): string | void => (formik.touched[name] && formik.errors[name] ? 'block' : 'none');
  const value = formik.values[name];
  const handleChange = useCallback(
    async (e) => {
      const v = e.target.value;

      if (name === 'cardNumber' && v > value) {
        const { card } = valid.number(value);
        const cardType = card?.type;
        const len = v.replace(/\s/g, '').length;
        const isAmex = cardType === 'american-express';
        const isVisa = cardType === 'visa';

        const shouldAddAmexFormatting = isAmex && (len === 4 || len === 10);
        const shouldAddVisaFormatting = isVisa && (len === 4 || len === 8 || len === 12);

        if ((isAmex && len > 15) || (isVisa && len > 16)) {
          await formik.setFieldValue(name, value);
        } else if (shouldAddAmexFormatting || shouldAddVisaFormatting) {
          await formik.setFieldValue(name, `${v} `);
        }
      }

      formik.handleChange(e);
    },
    [formik, name, value]
  );

  return (
    <Box>
      <Label>{props.placeholder}</Label>
      <Box
        ref={ref}
        as="input"
        type="text"
        mb={4}
        value={value}
        onChange={handleChange}
        onBlur={formik.handleBlur}
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
      <Box display={showError()}>{formik.errors[name]}</Box>
    </Box>
  );
});
