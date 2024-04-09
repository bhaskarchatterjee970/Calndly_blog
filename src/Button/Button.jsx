import React from 'react'

function Button({text,violet,blue,white,sky}) {
  return (
    <button className={`py-2 px-6 border-white  border-2 
     rounded-2xl m-5
     ${violet ? "bg-violet-500 font-bold" :""}
     ${sky ? "bg-blue-600 font-bold" :""}
     ${blue ? "bg-blue-800 font-bold" :""}
     ${white ? "text-blue-500 border-blue-600 font-bold":""}`}>{text}</button>
  )
}

export default Button