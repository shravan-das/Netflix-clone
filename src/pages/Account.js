import React from 'react'
import SavedShows from '../components/SavedShows'


const Account = () => {
  return (
    <>

    <div className='w-full text-white'>

    <img  className = "  w-full h-[400px] object-cover"src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/7645af9d-2679-4f54-b57d-3a6b5c670e14/IN-en-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    



    <div className='bg-black/60 fixed top-0 left-0  w-full h-[550px]'></div>

    <div className='absolute top-[20%] p-4 md:p-8 '>
      <h1 className=' text-3xl  md:text-5xl font-bold'>My Shows</h1>
    </div>






    </div>


    <SavedShows/>

        





    </>
  );
};

export default Account