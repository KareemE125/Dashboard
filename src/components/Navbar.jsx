/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext';

import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from './'

import avatar from '../data/avatar.jpg';

const TITLES = 
{
  Cart: 'cart',
  Chat: 'chat',
  Notification: 'notification',
  UserProfile: 'userProfile',
}

export default function Navbar() 
{
  const { setActiveSideBar, isClicked, navbarBtnHandler, screenSize, setScreenSize, currentColor } = useAppContext();

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
      <NavbarBtn title='Cart' color={currentColor} icon={<FiShoppingCart />} onClickFunc={() => navbarBtnHandler(TITLES.Cart)} />

      <NavbarBtn title='Chat' color={currentColor} dotColor="#00DD33" icon={<BsChatLeft />} onClickFunc={() => navbarBtnHandler(TITLES.Chat)} />

      <NavbarBtn title='Notification' color={currentColor} dotColor="#00DD33" icon={<RiNotification3Line />} onClickFunc={() => navbarBtnHandler(TITLES.Notification)} />

      <TooltipComponent 
      className='text-gray-100 hover:bg-gray-300 hover:text-black text-14 rounded-lg' 
      style={{background: currentColor}}
      content='Profile' 
      position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 rounded-lg' onClick={() => navbarBtnHandler(TITLES.UserProfile)}>
          <img src={avatar} alt='avatar' className='rounded-full w-8 h-8' />
          <p className=' flex items-center'>
            Hey<span className='font-bold ml-1'>Kareem</span>
          <MdKeyboardArrowDown className='ml-1 text-lg'/>
          </p>
        </div>
      </TooltipComponent>

      { isClicked.cart && <Cart /> }
      { isClicked.chat && <Chat /> }
      { isClicked.notification && <Notification /> }
      { isClicked.userProfile && <UserProfile /> }

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
