import React from 'react'
import Card from './Card'

const ProductCard = ({shop}) => {
    return (
        <div className='product-screen'>
        <div className='card-main'>
            {shop.map((item,i) => (
                <div key={i} className='cards'>
                    <div className='title'>{item.title}</div>
                    <div className='price'>{item.price}$</div>
                    <Card {...item}/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default ProductCard