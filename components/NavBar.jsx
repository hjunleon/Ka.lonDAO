
// import Button from '@mui/material/Button';
import MyButton from "./MyButton/MyButton"
export default function NavBar({ height }) {
    return (
        <div className="p-4 w-screen bg-red-pink-400 flex items-center justify-between"
            style={
                {
                    height: height
                }
            }
        >
            <div>
                <img src="/images/header.png" />
            </div>
            <div className="flex items-center justify-center">
                <MyButton className='bg-turqoise-400 py-2 px-4 rounded-full text-white select-none'>Sign in</MyButton>
            </div>
        </div>
    )
}