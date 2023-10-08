import {BiSolidUserCircle,BiSolidKey} from 'react-icons/bi'
function page() {

    return ( 
        <main className='flex w-full h-full justify-center '>
{/*          <div className='flex flex-col w-1/2 h-full justify-center items-center'>
                <h1 className='text-white text-4xl font-bold'>frenzy</h1>
                <h2 className='text-white text-2xl font-bold'>Share your photos with friends</h2>
                
    </div> */}
            <div className="flex flex-col h-3/4 w-1/2 justify-center mt-auto mb-auto">
                <form className="flex flex-col w-full bg-black bg-opacity-30 items-center rounded-xl h-3/4 justify-center gap-4">
                    <h1 className="text-white font-bold text-center text-4xl">Sign Up</h1>
                    <br></br>
                    <span className='flex w-1/2 items-center  justify-center bg-black bg-opacity-30 rounded-xl'>
                        <label className='w-fit h-full p-3 bg-black-500 rounded-l-xl '><BiSolidUserCircle className="h-full w-fit fill-white "/></label>
                        <input className="w-full text-white font-semibold text-2xl py-4 pl-2 bg-transparent  rounded-xl outline-none" placeholder="Username" />
                    </span>
                    <span className='flex w-1/2  bg-black bg-opacity-30 rounded-xl'>
                        <label className='w-fit h-full p-3 bg-black-500 rounded-l-xl '><BiSolidKey className="h-full w-fit fill-white "/></label>
                        <input className="w-full text-white font-semibold text-2xl py-4 pl-2 bg-transparent  rounded-xl outline-none" placeholder="Password" />
                    </span>
                    <button className="w-1/2 text-xl bg-blue-500 py-4 rounded-xl text-white font-semibold">Login</button>
                </form>
            </div>
        </main>
     );
}

export default page;