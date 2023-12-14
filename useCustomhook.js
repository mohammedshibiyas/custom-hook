import { useState } from 'react'

const useCustomhook = (inhook) => {

    const[value,setvalue]=useState(inhook)

    const increment=()=>{
        setvalue(value+1)
    }

    const decrement=()=>{
        setvalue(value-1)
    }
  return {
   value,increment,decrement
  }
}

export default useCustomhook
