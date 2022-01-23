import { GetServerSideProps } from 'next';
import Head from 'next/head'

import { SubscribeButton } from '../Components/SubscribeButton'
import { stripe } from '../services/stripe';

import style from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>
  
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>
              For {product.amount} month
            </span>
          </p>
          <SubscribeButton priceId={ product.priceId } />
        </section>
        <img src="/images/assets/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KKuBTLrkoFITGHFHr9LbPe2')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };
  
  return {
    props: {
      product
    }
  }
}