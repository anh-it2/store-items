import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import ProductCard from './Component/ProductCard'
import './App.css'

const App = () => {

  const [shop, setShop] = useState([])
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then( (data) =>{
      setShop(data)
      setNews(data)
    }
    )
  },[])

  return (
    <div>
      <Header setShop={setShop} news={news}/>
      <ProductCard shop={shop} />
    </div>
  )
}

export default App