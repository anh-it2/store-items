import React, { useState } from 'react'

const Card = ({image, description}) => {

    const [show, setShow] = useState(true)

    const showDescription = () => setShow(!show)

  return (
    <>
             {show ? <img src={image} />
            : <p>{description}</p>
            }
            <button onClick={showDescription} className='infor'>Infor</button>
    </>
  )
}

export default Card