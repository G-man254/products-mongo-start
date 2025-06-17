import React from 'react'

export function Button({text}) {
  return (
    <div>
      <button className="border border-[#c30f45] bg-[#231123] px-4 py-2 hover:scale-95 rounded-lg">{text}</button>
    </div>
  )
}

