import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Kanban, Calendar, Employees, Stacked, Pyramid, Customers, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Orders } from './pages'

import './App.css'
import { useAppContext } from './context/AppContext'

export default function App() {

  let { activeSideBar } = useAppContext();

  return <main>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>

        {/* Floating Setting icon button */}
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content='Settings' position='TopCenter' >
            <button type='button'
              className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {/* Navbar */}
        <nav className={`fixed navbar left-0 right-0 top-0 dark:bg-main-bg bg-main-bg drop-shadow w-full ${activeSideBar ? 'lg:pl-72' : 'flex-2'}`}>
          <div className=' bg-main-bg dark:bg-main-dark-bg w-full'>
            <Navbar />
          </div>
        </nav>

        <div className='flex w-full'>

          {/* Sidebar */}
          <aside className={` ${!activeSideBar && 'hidden'} fixed lg:static sidebar dark:bg-secondary-dark-bg bg-white drop-shadow`}>
            <Sidebar />
          </aside>

          {/* Routing */}
          <main className='w-full  pt-20 pb-10 px-6'>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </main>

        </div>


      </div>
    </BrowserRouter>
  </main>;
}