import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
// import { IconButton } from "@material-tailwind/react";


// import IconButton from '@mui/material/IconButton';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='bg-gradient-to-b from-[#FFD88C] to-my-orange-400 h-full flex'>
        <div>
          <header>Welcome to Ka.lonDAO</header>
          <div>
            The Web 3.0 Gamified Dating Experience that Makes Dating Fun Again
          </div>
          <div>
            <img src="/images/pingu.png"/>
          </div>
        </div>
      </section>
      {/* <section className={utilStyles.headingMd}>
        <div className="flex gap-4">
        </div>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
