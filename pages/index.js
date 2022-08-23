import { useState } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { FemaleIcon,MaleIcon, TransgenderIcon } from '@mui/icons-material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
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

          <div>
            <header className='mb-6'>Welcome to Ka.lonDAO</header>
            The <span className='text-turqoise-400'>Web 3.0 Gamified Dating Experience </span> that Makes Dating Fun Again
          </div>
          <div className='flex justify-center'>
            <img src="/images/pingu.png" />
          </div>
        </div>
        <div className='flex justify-center items-center h-full w-full'>

          <div className='bg-white w-[50%]  rounded-lg drop-shadow-lg'>
            <div className='text-3xl text-center my-4'>Quick Sign Up!</div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              noValidate
              autoComplete="off"
              className="flex items-center justify-start flex-col h-full p-4"
            >
              <TextField
                required
                id="outlined-required"
                label="Name"
                className='w-full'
              />
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                // autoComplete="current-password"
                className='w-full'
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Birthday"
                  value={bday}
                  onChange={(newValue) => {
                    setBDay(newValue);
                  }}
                  renderInput={(params) => <TextField
                    className='w-full' {...params} />}
                />
              </LocalizationProvider>


              <FormControl fullWidth sx={{ m: 1 }}>
                <label>Gender Preference: </label>
                <div>
                  {
                    ["male", "female", "both"].map((el, idx) => (
                      <IconButton className="mx-2" onClick={()=>{
                        setGender(el)
                      }} color={gender == el?"success":"default"}>
                        {
                          el == 'male' ? (<MaleIcon />) : el == 'female' ? (<FemaleIcon />) : (<TransgenderIcon />)
                        }

                      </IconButton>
                    )
                    )
                  }
                  {/* <IconButton className="mx-2">
                    <MaleIcon />
                  </IconButton>
                  <IconButton className="mx-2">
                    <FemaleIcon />
                  </IconButton>
                  <IconButton className="mx-2">
                    <TransgenderIcon />
                  </IconButton> */}
                </div>
              </FormControl>

              <Button variant="text" color="primary">
                Sign Up
              </Button>
            </Box>
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
