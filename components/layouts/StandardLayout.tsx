import Head from "next/head";
import { ThemeProvider } from "../../context/ThemeContext";
import Navbar from "../navbar/NavBar";

function StandardLayout({ children }: any) {
  return (
    <>
      <Head>
        <title>NASA Space app</title>
        <meta
          name="description"
          content="NASA Space APP created by D.Goergens"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </main>
    </>
  );
}
export default StandardLayout;
