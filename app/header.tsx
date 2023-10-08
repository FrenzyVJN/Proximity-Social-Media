import { FiFacebook } from 'react-icons/fi';
import {IoSend} from 'react-icons/io5';
//Social Media Header
function Header() {
    return ( 
        <header className="flex fixed w-full items-center bg-gradient-to-b from-cyan-800 to-blue-800 text-white p-5 ">
            <h1 className="flex items-end h-20 font-bold text-4xl"><FiFacebook className=" h-full w-fit"/>r e n z y</h1>
            <form className='flex w-1/2 ml-auto h-1/3'>
                <input className="flex bg-black bg-opacity-30  py-4 px-4 w-full rounded-l-xl  outline-none" placeholder="Search for a friend" />
                <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold p-4  outline-none  rounded-r-xl"><IoSend className='h-10 w-20'/></button>
            </form>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">Sign Up</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">Login</button>
        </header>


     );
}

export default Header;