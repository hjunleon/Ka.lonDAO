import { useState } from 'react'
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
export default function SignupForm(){
    const [gender, setGender] = useState("male");
    const [bday, setBDay] = useState(null);
    return (
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
                      <IconButton key={`${el}_${idx}`} className="mx-2" onClick={()=>{
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
    )
}