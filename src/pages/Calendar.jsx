import React from 'react'

import { ScheduleComponent, Day, Week, Month, Year, Agenda, Resize, DragAndDrop, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'


export default function Calendar() {


  return <main className='h-screen'>
    <Header title='Calender' category='App' />
    <ScheduleComponent
      height='500px'
      eventSettings={{ dataSource: scheduleData }}
      views={["Day", "Week", "Month", "Year", "Agenda"]}       
      currentView={"Month"}
    >
      <Inject services={[Day, Week, Year, Month, Agenda, Resize, DragAndDrop]} />
    </ScheduleComponent>
  </main>

}
