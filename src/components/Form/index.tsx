/* eslint-disable no-console */
import React, { FC } from 'react';
import { Box, Flex, Input, Form, FormProps, validationSchema } from '@dfp/components';
import { NAME, CARD, CVV, EXP_MONTH, EXP_YEAR } from './constants';
import { Amex, Discover, Mastercard, Visa } from '../../assets';

const validations: FormProps['validations'] = {
  initialValues: {
    name: '',
    cvv: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
  },
  onSubmit: async (values) => {
    console.log('*Form Input Values*', JSON.stringify(values, null, 2));

    // TODO: sanitize form values, might be a way to do this with Formik
    await new Promise((res) => setTimeout(res, 1000));

    console.log('*After Fake Form Submission*');
  },
  validationSchema,
};

export const DFPform: FC = () => (
  <Form validations={validations}>
    <Input name="name" placeholder={NAME} />
    <Input name="cardNumber" placeholder={CARD} />
    <Input name="cvv" placeholder={CVV} />
    <Flex flexDirection={['column', 'row']}>
      <Box width={[1, 1 / 2]} mr={[0, 1]}>
        <Input name="expMonth" placeholder={EXP_MONTH} />
      </Box>
      <Box width={[1, 1 / 2]} ml={[0, 1]}>
        <Input name="expYear" placeholder={EXP_YEAR} />
      </Box>
    </Flex>
    <Flex justifyContent="space-between">
      <Box width="23%" height="120px">
        <Visa width="100%" height="100%" />
      </Box>
      <Box width="23%" height="120px">
        <Mastercard width="100%" height="100%" />
      </Box>
      <Box width="23%" height="120px">
        <Amex width="100%" height="100%" />
      </Box>
      <Box width="23%" height="120px">
        <Discover width="90%" height="100%" />
      </Box>
    </Flex>
  </Form>
);
