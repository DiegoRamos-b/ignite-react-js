import style from "../styles/global.module.scss";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Ig News</title>
      </Head>

      <h1 className={ style.title }>
        Hello <span>World</span>
      </h1>
    </>
  )
}
