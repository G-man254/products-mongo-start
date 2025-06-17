import React from 'react'

export function Label({text, htmlFor}) {
  return (
    <div>
        <label htmlFor={htmlFor}>{text}</label>
    </div>
  )
}

