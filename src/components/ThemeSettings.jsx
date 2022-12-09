import React from 'react'

import { BsCheck } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { useAppContext } from '../context/AppContext'




export default function Theme() {
  const { setColor, setMode, currentColor, currentMode, setActiveThemeBar } = useAppContext();

  return <main className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
    <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-main-dark-bg w-72'>

      <section className='flex justify-between items-center py-4 pl-8'>

        <h3 className='font-semibold text-xl'>Theme Settings</h3>

        <TooltipComponent content='Theme Settings' position='BottomCenter'>
          <button className='text-xl rounded-full hover:bg-light-gray p-2 pr-3' type='button' onClick={() => setActiveThemeBar(false)}>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>

      </section>

      <section className='flex-col border-t-1 border-color py-4 px-8'>

        <h3 className='font-semibold text-lg'>Options</h3>

        <div className='mt-4'>
          <input type="radio" id='light' name='theme' value='Light' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Light'} />
          <label htmlFor="light" className='pl-2 text-md cursor-pointer' >Light</label>
        </div>

        <div className='mt-4'>
          <input type="radio" id='dark' name='theme' value='Dark' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Dark'} />
          <label htmlFor="dark" className='pl-2 text-md cursor-pointer' >Dark</label>
        </div>

      </section>

      <section className='flex-col border-t-1 border-color py-4 px-8'>
        <h3 className='font-semibold text-lg'>Colors</h3>
        <div className='flex flex-wrap gap-3 mt-4'>
          {
            themeColors.map((color, index) => <TooltipComponent key={index} content={color.name} position='TopCenter'>
              <div className='cursor-pointer'>
                <button type='button' className={`p-2 rounded-full ${color.color !== currentColor && 'h-6 w-6'} cursor-pointer`} style={{ background: color.color }} onClick={()=>{setColor(color.color)}}>
                  <BsCheck className={`text-2xl text-white ${color.color !== currentColor && 'hidden'}`} />
                </button>
              </div>
            </TooltipComponent>)
          }
        </div>
      </section> 

    </div>
  </main>
}
