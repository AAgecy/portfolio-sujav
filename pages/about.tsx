import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio - About</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <section className="max-w-4xl p-8 bg-gray-50 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">About Me</h1>
          <p className="text-gray-700 text-lg mb-6">
            Hi, I'm [Your Name], a passionate software developer with expertise in building scalable web applications. I enjoy creating seamless user experiences and solving complex problems through code.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-700 list-disc pl-5">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </section>
      </main>
    </>
  );
}