import { useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { SignupForm } from "../components";
import Link from 'next/link'
import Date from '../components/date'

// import { IconButton } from "@material-tailwind/react";


// import IconButton from '@mui/material/IconButton';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Home({ allPostsData }) {
  const [gender, setGender] = useState("male");
  const [bday, setBDay] = useState(null);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='bg-gradient-to-b from-[#FFD88C] to-my-orange-400 h-full w-full flex'>
        <div className="font-bold text-5xl text-white flex flex-col justify-between	p-16 pb-0 h-full">

          <div className='mt-16'>
            <header className='mb-6'>Welcome to Ka.lonDAO</header>
            The <span className='text-turqoise-400'>Web 3.0 Gamified Dating Experience </span> that Makes Dating Fun Again
          </div>
          <div className='flex justify-center'>
            <img src="/images/pingu.png" />
          </div>
        </div>
        <div className='flex justify-center items-center h-full w-full'>
          <SignupForm />
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
