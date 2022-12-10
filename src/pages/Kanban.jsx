import React from 'react'

import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

export default function Kanban() 
{
  return <main>
    <Header title='Kanban' category='App' />
    <div className='p-4 pt-8 bg-white'>

      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {
            kanbanGrid.map((item) => <ColumnDirective key={item.keyField} {...item} />)
          }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  </main>
}
