import React from 'react'
import useCustomhook from './useCustomhook'

function Custom  ()  {

    const{value,increment,decrement}=useCustomhook(0)
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{value}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Custom
