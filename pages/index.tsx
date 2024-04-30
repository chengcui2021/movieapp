import Head from 'next/head';
import MainContent from 'page-components/home-page/index';

export default function Index() {
  return (
    <div className="flex min-h-[20rem] flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent />
    </div>
  );
}
