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
            <p>Empowering Your Digital Vision.</p>
          </div>
          <h1 className={styles.heroTitle}>
            We build products for entrepreneurs, inventors, and brands.
          </h1>

          <p className={styles.wipText}>
            Thanks for stopping by our software agency website! We're currently
            in the midst of building an app for one of our clients, but we can't
            wait to show off our past projects and capabilities on this site.
            Keep an eye on this site for updates!
          </p>
        </div>
        <footer className={styles.footer}>
          <p>Built on the bitten side of an apple.</p>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/company/itbitedev/">
              <LinkedinIcon width={28} height={28} />
            </a>
            <a href="https://www.facebook.com/itbite.dev">
              <FacebookIcon width={28} height={28} />
            </a>
            <a href="https://twitter.com/itbitedev">
              <TwitterIcon width={28} height={28} />
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
