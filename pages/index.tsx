import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import StandardLayout from "../components/layouts/StandardLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <StandardLayout>
      <Head>
        <title>NASA Space app</title>
        <meta
          name="description"
          content="NASA Space APP created by D.Goergens"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Color test h1 remove later</h1>
    </StandardLayout>
  );
}
