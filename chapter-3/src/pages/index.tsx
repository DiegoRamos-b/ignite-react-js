import Head from 'next/head'

import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig News</title>
      </Head>
  
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>For $ 9.90 month</span>
          </p>
        </section>
        <img src="/images/assets/avatar.svg" alt="Girl Coding" />
      </main>

    </>
  )
}
