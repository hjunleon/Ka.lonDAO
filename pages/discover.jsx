import { useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function Discover({ }) {
    const [username, setUserName] = useState("Luke")
    
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className='bg-gradient-to-b from-[#FFD88C] to-my-orange-400 h-full w-full flex'>
                
            </section>
        </Layout>
    )
}