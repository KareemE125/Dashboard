import React, { useRef } from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'


export default function ColorPicker() {
  const penRef = useRef()

  function changePenColor(color) {
    penRef.current.style.backgroundColor = color.currentValue.hex;
  }

  return <main className='h-screen'>
    <Header title='Color Picker' category='App' />
    <section className='flex flex-col items-center justify-center text-center'>
      <div className='rounded-3xl bg-white pb-2' style={{width: 'fit-content'}} >
        <div ref={penRef} id='preview' className='rounded-3xl' />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20 dark:text-gray-200">
        <div>
          <h4 className='text-2xl font-semibold p-4'>Inline Pallette</h4>
          <ColorPickerComponent id='inline-palette' mode='Palette' modeSwitcher={false} inline showButtons={false} change={changePenColor} />
        </div>
        <div>
          <h4 className='text-2xl font-semibold p-4'>Inline Picker</h4>
          <ColorPickerComponent id="inline-picker" mode="Picker" modeSwitcher={false} inline showButtons={false} change={changePenColor} />
        </div>
      </div>
    </section>
  </main>
}
