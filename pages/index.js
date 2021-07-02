import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDetails } from "../hooks/details";

export default function Home() {
  const { details, error } = useDetails();
  if (error) {
    return <span>Error!</span>;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Clerk with Firebase!!</a>
          </h1>

          <div className={styles.grid}>
            {details.map(({ favorite_drink, favorite_food }) => {
              return (
                <div
                  key={favorite_drink + favorite_food}
                  className={styles.card}
                >
                  <h2>Favorite Food and Drink</h2>
                  <p>{favorite_food}</p>
                  <p>{favorite_drink}</p>
                </div>
              );
            })}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
}
