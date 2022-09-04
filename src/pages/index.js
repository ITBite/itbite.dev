import * as React from 'react';
import Head from 'next/head';
import { MoonIcon, Signature, SunIcon } from '@/atoms/icons';
import { useToggleDarkMode } from '@/lib/useDarkMode';
import { IF_Else } from '@/atoms/Conditionals';
import styles from '../templates/Home.module.scss';
import { LineIcon } from '@/atoms/icons/LineIcon';
import { LinkedinIcon } from '@/atoms/icons/social/LinkedinIcon';
import { FacebookIcon } from '@/atoms/icons/social/FacebookIcon';
import { TwitterIcon } from '@/atoms/icons/social/TwitterIcon';

export default function Home() {
  const [toggle, isDarkMode] = useToggleDarkMode();

  return (
    <>
      <Head>
        <title>itbite.dev | bitten side of an apple</title>
        <meta
          name="description"
          content="itbite dev is development consultancy that builds products for entrepreneurs, inventors, and brands."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerLogo}>
            <Signature width={64} height={64} isDarkMode={isDarkMode} />
            <p>
              itbite<span>.dev</span>
            </p>
          </div>
          <div onClick={toggle}>
            <IF_Else predicate={isDarkMode}>
              <SunIcon />
              <MoonIcon />
            </IF_Else>
          </div>
        </header>
        <div className={styles.heroContainer}>
          <div className={styles.subHeading}>
            <LineIcon isDarkMode={isDarkMode} />
            <p>Digital product studio.</p>
          </div>
          <h1 className={styles.heroTitle}>
            We build products for entrepreneurs, inventors, and brands.
          </h1>

          <h2>
            Hey thanks for stopping by. We are busy cooking an App for one brand and didn't have time to finish this site. Hope to see you in the future! When we populate this place.
          </h2>
        </div>
        <footer className={styles.footer}>
          <p>Follow us on social media to know more</p>
          <div className={styles.socialMediaContainer}>
            <LinkedinIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
          <h3>Build on the Bitten side of an apple.</h3>

        </footer>
      </section>
    </>
  );
}
