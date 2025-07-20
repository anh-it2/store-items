import React, { useState } from 'react'

const Card = ({image, description}) => {

    const [show, setShow] = useState(true)

    const showDescription = () => setShow(!show)

  return (
        <div className='Card'>
            {show ? <img src={image} />
            : <p>{description}</p>
            }
            <button onClick={showDescription} className='infor'>Infor</button>
        </div>
  )
}

export default Card