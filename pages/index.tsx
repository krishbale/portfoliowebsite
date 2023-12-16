import Head from "next/head";
;
import Card from "@/components/Card";
import Portfolio from "@/components/portfolio";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { useState } from "react";
import Hero from "@/components/Hero";
export default function Home() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <>
      <div className={darkmode ? "dark" : ""}>
        <Head>
          <title>Balkrishna Pokharel Portfolio</title>
          <meta name="Balkrishna Pokharel " content="The portfolio website of Balkrishna Pokharel who is senior Software Engineer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
         <Hero darkmode={darkmode} setDarkmode={setDarkmode} />
          {/* <Card /> */}
          <Portfolio />
          <Experience />
          <Education />
          {/* <Footer /> */}

          
        </main>
      </div>
    </>
  );
}
