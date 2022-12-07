import React from 'react'

export default function Button({color, bgColor, text, size, borderRadius}) {
  return <button type='button' style={{background: bgColor, color, borderRadius}} className={`text-${size} px-3 py-2.5 hover:drop-shadow-xl`}>
    {text}
  </button>
}
