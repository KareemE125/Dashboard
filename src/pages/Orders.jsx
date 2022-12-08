import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Search, Sort, ContextMenu,  Page, Toolbar, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, ordersGrid } from '../data/dummy'
import { Header } from '../components'

export default function Orders() {

  return <main>
    <Header title='Orders' category='Page' />
    <GridComponent
      id='gridOrders'
      dataSource={ordersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      toolbar={['Search']}
      contextMenuItems={['PdfExport', 'ExcelExport', 'CsvExport']}
    >
      <ColumnsDirective>
        {
          ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
        }
      </ColumnsDirective>
      <Inject services={[Sort, Toolbar, Search, ContextMenu, Page, ExcelExport, PdfExport]} />
    </GridComponent>
  </main>

}
