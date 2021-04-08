import Head from 'next/head';
import { Box, Flex, Input, Label } from '@affirm/components';

const NAME = 'Name';
const CARD = 'CardNumber';
const CVV = 'CVV2';
const EXP_MONTH = 'Exp. Month';
const EXP_YEAR = 'Exp. Year';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        textAlign="center"
        variant="card"
        maxWidth="538px"
        mx="auto"
        my={6}
      >
        <h1>
          Enter your credit card information
        </h1>
        <Box as="form">
          <Label>{NAME}</Label>
          <Input placeholder={NAME} />
          <Label>{CARD}</Label>
          <Input placeholder={CARD} />
          <Label>{CVV}</Label>
          <Input placeholder={CVV} />
          <Flex>
            <Box width={1/2} mr={[0, 1]}>
              <Label>{EXP_MONTH}</Label>
              <Input placeholder={EXP_MONTH} />
            </Box>
            <Box width={1/2} ml={[0, 1]}>
              <Label>{EXP_YEAR}</Label>
              <Input placeholder={EXP_YEAR}/>
            </Box>
          </Flex>
          <Box as="button">
            Submit
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
