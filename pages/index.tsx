import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Home */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white fade-in-up">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 fade-in-up">
            Explore my projects, skills, and experience!
          </p>
        </section>

        {/* About */}
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About</h2>
          <p className="max-w-xl text-gray-600 dark:text-gray-300">
            I&apos;m a passionate developer who loves building beautiful and functional web
            experiences. I specialise in modern front-end technologies and enjoy solving challenging
            problems.
          </p>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
          <p className="max-w-xl text-gray-600 dark:text-gray-300">
            Here you will find a selection of my recent work — from web apps to open-source
            contributions.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact</h2>
          <p className="max-w-xl text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </section>
      </main>
    </>
  );
}