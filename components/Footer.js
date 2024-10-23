import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-950 h-16 text-white flex items-center justify-center    '>
        <p className='md:px-0 px-2 text-center'>Copyright &copy;{currentYear} Get Me A Chai - All Rights Reserved</p>
    </footer>
  )
}

export default Footer 