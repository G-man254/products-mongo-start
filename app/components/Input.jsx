import React from 'react'

export function Input({text, name}) {
  return (
    <div>
      <input type={text} name={name} className="border border-[#c30f45] w-full"/>
    </div>
  )
}

