import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const SideBar = () => {
  return (
    <nav className='bg-nav w-[19rem] h-screen'>
      <div className='pl-[5.75rem] pt-[2.75rem]'>
        <Logo />
      </div>      
      <div className='mt-[3.06rem] ml-[2rem] w-60 h-20 bg-primary rounded-[0.625rem] flex-center nav-card-filter'>
        <div className=' flex gap-[3.94rem] items-center '>
          <div className='flex flex-col gap-[0.38rem]'>
            <p className='text-white text-xs'>Balance</p>
            <h1 className='text-white font-extrabold text-[1.375rem]'>$12,577.00</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4" fill="none">
            <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="white"/>
            <circle cx="10" cy="2" r="2" transform="rotate(-90 10 2)" fill="white"/>
            <circle cx="18" cy="2" r="2" transform="rotate(-90 18 2)" fill="white"/>
          </svg>
        </div>
      </div>
      <div className='mt-[2.31rem]'>
        <Nav />
      </div>
    </nav>
  )
}

export default SideBar