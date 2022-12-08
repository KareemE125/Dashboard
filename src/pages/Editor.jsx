import React from 'react'
import { HtmlEditor, Image, QuickToolbar, Link, RichTextEditorComponent, Toolbar, Inject } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'

export default function Editor() 
{
  
  return <main className='bg-white rounded-3xl'>
    <Header title='Text Editor' category='App'/>
    <RichTextEditorComponent>
      <EditorData/>
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </main>
}
