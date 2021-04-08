import React, { FC } from 'react';
import * as yup from 'yup';
import { Box, Flex, Input, Form } from '@dfp/components';
import { NAME, CARD, CVV, EXP_MONTH, EXP_YEAR } from './constants';
import { cardNumber, cvv, name, expYear, expMonth } from './validations';

const validations = {
  initialValues: {
    name: '',
    cvv: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
  },
  onSubmit: (values) => {
    console.log(JSON.stringify(values, null, 2));
  },
  validationSchema: yup.object().shape({
    name,
    cardNumber,
    cvv,
    expMonth,
    expYear,
  }),
};

export const DFPform: FC = () => (
  <Form validations={validations}>
    <Input name="name" placeholder={NAME} />
    <Input name="cardNumber" placeholder={CARD} />
    <Input name="cvv" placeholder={CVV} />
    <Flex>
      <Box width={1 / 2} mr={[0, 1]}>
        <Input name="expMonth" placeholder={EXP_MONTH} />
      </Box>
      <Box width={1 / 2} ml={[0, 1]}>
        <Input name="expYear" placeholder={EXP_YEAR} />
      </Box>
    </Flex>
  </Form>
);
