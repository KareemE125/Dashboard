/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext';

import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

export default function Navbar() 
{
  const { setActiveSideBar, screenSize, setScreenSize, currentColor } = useAppContext();

  useEffect(() => {

    function handleScreenSizeChange(){ setScreenSize(window.innerWidth); }
    window.addEventListener('resize', handleScreenSizeChange);
    return () => window.removeEventListener('resize', handleScreenSizeChange);

  }, [])

  useEffect(() => {

    if( screenSize <= 900 ){  setActiveSideBar(false);  }
    else{ setActiveSideBar(true);  }

  }, [screenSize])
  
 
  return <nav className='flex justify-between p-2 relative'>
    <NavbarBtn title='Menu' color={currentColor} icon={<AiOutlineMenu />} onClickFunc={() => setActiveSideBar(prev => !prev)} />

    <section className='flex'>
      <TooltipComponent 
      className='text-gray-100 hover:bg-gray-300 hover:text-black text-14 rounded-lg' 
      style={{background: currentColor}}
      content='Profile' 
      position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer py-1 pl-2 pr-3  rounded-lg'>
          <img src={avatar} alt='avatar' className='rounded-full w-8 h-8' />
          <p>
            Hey<span className='font-bold ml-1'>Kareem</span>
          </p>
        </div>
      </TooltipComponent>
    </section>

  </nav>
}

function NavbarBtn({ title, onClickFunc, icon, color, dotColor }) {
  return <TooltipComponent content={title} position='BottomCenter'>
    <button className='relative text-16 rounded-full p-3 hover:bg-light-gray' type='button' style={{ color }} onClick={onClickFunc}>
      <span className='absolute inline-flex rounded-full h-2 w-2 right-2.5 top-2' style={{ background: dotColor }} />
      {icon}
    </button>
  </TooltipComponent>
}
