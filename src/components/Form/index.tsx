import React, { FC } from 'react';
import { Box, Flex, Input, Label, Form as AffirmForm } from '@affirm/components';
import { NAME, CARD, CVV, EXP_MONTH, EXP_YEAR } from './constants';

const onSubmit = (): void => {
  console.log('**SUBMITTED');
};

export const Form: FC = () => (
  <AffirmForm onSubmit={onSubmit}>
    <Label>{NAME}</Label>
    <Input name="name" required placeholder={NAME} />
    <Label>{CARD}</Label>
    <Input name="credit-card" required placeholder={CARD} />
    <Label>{CVV}</Label>
    <Input name="cvv" required placeholder={CVV} />
    <Flex>
      <Box width={1 / 2} mr={[0, 1]}>
        <Label>{EXP_MONTH}</Label>
        <Input name="exp-month" required placeholder={EXP_MONTH} />
      </Box>
      <Box width={1 / 2} ml={[0, 1]}>
        <Label>{EXP_YEAR}</Label>
        <Input name="exp-year" required placeholder={EXP_YEAR} />
      </Box>
    </Flex>
    <Box as="button" type="submit">
      Submit
    </Box>
  </AffirmForm>
);
