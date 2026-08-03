import React, { useContext }  from 'react'

import Context from '../Contesxt'
const A = () => {
    let data=useContext(Context)
  return (
    <div>
        {data}
    </div>
  )
}

export default A