import React, { FC, forwardRef, useContext, useCallback, useState } from 'react';
import * as valid from 'card-validator';
import { InputProps } from './types';
import { FormContext } from '../Form';
import { Box } from '../Box';
import { Label } from '../Label';

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const formik = useContext(FormContext);
  const { name } = props;
  const touched = formik.touched[name];
  const error = formik.errors[name];
  const showError = touched && Boolean(error);
  const value = formik.values[name];
  const [focused, setFocus] = useState(false);
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

  const handleBlur = useCallback(
    (e) => {
      setFocus(false);
      formik.handleBlur(e);
    },
    [formik]
  );

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  return (
    <Box position="relative">
      <Label
        position="absolute"
        top="9px"
        left="12px"
        color="secondary"
        display={focused || !!value ? 'none' : 'block'}>
        {props.placeholder}
      </Label>
      <Box
        ref={ref}
        as="input"
        type="text"
        mb={4}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
        __css={{
          display: 'block',
          width: '100%',
          p: 2,
          appearance: 'none',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          borderRadius: 'default',
          border: '1px solid',
          borderColor: showError ? 'alert' : 'secondary',
          color: 'inherit',
          bg: 'transparent',
          boxSizing: 'border-box',
          ':focus': {
            outline: 'none',
          },
          '::placeholder': {
            color: 'transparent',
          },
        }}
      />
      <Box bottom="-20px" left="10px" position="absolute" color="alert" display={showError ? 'block' : 'none'}>
        {formik.errors[name]}
      </Box>
    </Box>
  );
});
