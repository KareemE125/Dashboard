import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'



export default function ColorPicker() 
{

  const pen = document.getElementById('preview');
  function changePenColor(color){ pen.style.backgroundColor = color.currentValue.hex; }

  return <main className='bg-white rounded-3xl'>
    <Header title='Color Picker' category='App' />
    <section className='text-center'>
      <div id='preview' />
      <div className="flex flex-wrap justify-center items-center gap-20">
        <div>
          <h4 className='text-2xl font-semibold p-4'>Inline Pallette</h4>
          <ColorPickerComponent id='inline-palette' mode='Palette' modeSwitcher={false} inline showButtons={false} change={changePenColor} />
        </div>
        <div>
          <h4 className='text-2xl font-semibold p-4'>Inline Picker</h4>
          <ColorPickerComponent id="inline-picker" mode="Picker" modeSwitcher={false} inline showButtons={false} change={changePenColor}/>
        </div>
      </div>
    </section>
  </main>
}
