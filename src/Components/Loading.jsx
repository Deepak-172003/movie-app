import React from 'react'

const Loading = () => {
  return (
    // <div className=' w-screen h-screen flex justify-center items-center bg-black '>
    //   <img className='h-[50%] object-cover' src="" alt="" />
    // </div>
    <div className="flex justify-center items-center w-full h-full py-10">
      <div className="w-16 h-16 border-4 border-[#6556CD] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading