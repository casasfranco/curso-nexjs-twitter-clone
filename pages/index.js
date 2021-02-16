import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">Devter!</a>
        </h1>
        <nav>
          <Link href="/timeline" className={styles.nav}>
            <a>Timeline</a>
          </Link>
        </nav>
      </AppLayout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  );
}
