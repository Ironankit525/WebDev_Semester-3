import React from 'react'
import { memo } from 'react'
const Child = () => {
    console.log("hihihijh")
    return (
        <div>
            <h3>HELLO</h3>
    </div>
  )
}

export default memo(Child)