import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Kanban, Calendar, Employees, Stacked, Pyramid, Customers, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Orders } from './pages'

import './App.css'

export default function App() {

  let isActiveSideBar = true;

  return (
    <main>
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


          {/* Sidebar */}
          {
            isActiveSideBar ?
              <aside className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </aside>
              :
              <aside className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </aside>
          }

          {/* Navbar */}
          <nav className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${isActiveSideBar ? 'md:pl-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </nav>

          {/* Routing */}
          <div>
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
          </div>


        </div>
      </BrowserRouter>
    </main>
  )
}