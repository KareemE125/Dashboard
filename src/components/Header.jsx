import React from 'react'

export default function Header({ title, category }) 
{
  return <header className='mb-10'>
    <p className='text-gray-400'>
      {category}
    </p>
    <p className='text-3xl text-slate-900 dark:text-gray-200 font-extrabold tracking-tighter'>
      {title}
    </p>
  </header> 

}
