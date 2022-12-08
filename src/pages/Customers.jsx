import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Search, ExcelExport, PdfExport, ContextMenu, Toolbar, Selection, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'


export default function Customers() {
  return <main>
    <Header title='Customers' category='Page' />
    <GridComponent
      id='gridCust'
      dataSource={customersData}
      allowPaging
      allowSorting
      allowSelection
      allowExcelExport
      allowPdfExport
      toolbar={['Search','Delete','Edit']}
      editSettings={{ allowEditing: true, allowDeleting: true }}
      contextMenuItems={['Edit', 'Delete', 'PdfExport', 'ExcelExport', 'CsvExport']}
    >
      <ColumnsDirective>
        {
          customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
        }
      </ColumnsDirective>
      <Inject services={[Sort, Toolbar, Search, Page, Selection, Edit, ExcelExport, PdfExport, ContextMenu]} />
    </GridComponent>
  </main>
}
