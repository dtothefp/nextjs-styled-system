import Head from 'next/head';
import { Box, Flex, Input } from '@affirm/components';

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
          <Input placeholder="Name" />
          <Input placeholder="CardNumber" />
          <Input placeholder="CVV2" />
          <Flex justifyContent="space-between">
            <Input placeholder="Exp. Month" width={1/2} mr={[0, 1]} />
            <Input placeholder="Exp. Year" width={1/2} ml={[0, 1]} />
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
