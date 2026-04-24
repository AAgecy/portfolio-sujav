import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore my projects, skills, and experience!
          </p>
        </section>
      </main>
    </>
  );
}