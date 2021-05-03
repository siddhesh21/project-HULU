import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HULU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Header */}
      <Header />
      {/** Nav */}
      <Nav />
      {/** Results */}
      <Results />
    </div>
  );
}
