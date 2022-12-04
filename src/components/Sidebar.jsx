import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiDgraph } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useAppContext } from '../context/AppContext'

export default function Sidebar() 
{

  let { activeSideBar, setActiveSideBar } = useAppContext();

  const activeLinkClass = 'flex items-center pl-5 py-2 rounded-lg text-white text-md m-1 dark:text-black dark:bg-gray-200 bg-slate-900 text-white';

  const normalLinkClass = 'flex items-center pl-5 py-2 rounded-lg text-md text-gray-700 hover:bg-slate-900 hover:text-white dark:text-gray-200 dark:hover:text-black dark:hover:bg-gray-200 m-1';

  

  return <aside className='pl-5 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8'>
    {
      activeSideBar && <>
        <div className='flex justify-between items-center mt-2  '>

          <Link className='items-center flex gap-1 text-xl font-extrabold tracking-tighter dark:text-white text-slate-900 ' to='/' onClick={() => setActiveSideBar(false) } >
            <SiDgraph className='text-2xl' /> <span>Dashboard</span>
          </Link>

          <TooltipComponent className='pr-2' content='Menu' position='BottomCenter'>
            <button className='text-xl rounded-full p-2 hover:bg-light-gray mt-2 block md:hidden' type='button' onClick={()=> setActiveSideBar( prev => !prev ) }>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>

        </div>

        <section className='mt-10'>
          {
            links.map(item => <div key={item.title} >
              <h4 className='text-gray-500 font-medium m-2 mt-4 uppercase'>
                {item.title}
              </h4>
              {
                item.links.map(link =>
                  <NavLink className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass} key={link.name} to={`/${link.name}`}>
                    <h5 className='text-sm font-medium capitalize flex items-center gap-3'>
                      {link.icon} {link.name}
                    </h5>
                  </NavLink>
                )
              }
            </div>)
          }
        </section>

      </>
    }
  </aside>
}
