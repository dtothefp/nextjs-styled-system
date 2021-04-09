import Head from 'next/head';
import { App } from '../components/App';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  );
}

export default Home;
