import React, { useEffect, useState } from 'react'

const Header = ({setShop, news}) => {

    const [buttons, setButtons] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((data) => setButtons(data))
    },[])
    
    const btnFilter = (list) => setShop(news.filter((item,key) => (item.category === list)))
  return (
    <div className='list-item'>
        <h1>Product List</h1>
        <div className='btns'>
            <button onClick={() => setShop(news)}>All</button>
            {buttons.map((items,key) =>{
                return(
                <button key={key} onClick={() => btnFilter(items)}>{items}</button>
                )
            })}
        </div>
    </div>
  )
}

export default Header