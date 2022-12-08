import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Search, ExcelExport, PdfExport, ContextMenu, Toolbar, Inject } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid, } from '../data/dummy'
import { Header } from '../components'

export default function Employees() {
  return <main>
    <Header title='Employess' category='Page' />
    <GridComponent
      id='gridEmps'
      dataSource={employeesData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      toolbar={['Search']}
      contextMenuItems={['PdfExport', 'ExcelExport', 'CsvExport']}
    >
      <ColumnsDirective>
        {
          employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
        }
      </ColumnsDirective>
      <Inject services={[Sort, Toolbar, Search, Page, ExcelExport, PdfExport, ContextMenu]} />
    </GridComponent>
  </main>
}
