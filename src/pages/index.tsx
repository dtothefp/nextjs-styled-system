import Head from 'next/head';
import { Box } from '@dfp/components';
import { App } from '../components/App';

function Home(): JSX.Element {
  return (
    <Box fontFamily="body">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </Box>
  );
}

export default Home;
