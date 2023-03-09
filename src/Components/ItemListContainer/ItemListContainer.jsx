import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './itemListContainer.css'



const ItemListContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(dataJson=>setData(dataJson))
  }, [])
  

  console.log(data)


  return (
    <div className="container">
      <h1 style={{textAlign:'center', fontWeight:'bold', color:'#333'}}>Lista de Productos</h1>
      <div className="flex-container">
        {
          data.map(prod => (
            <div className="card">
              <Link to={`/product/${prod.id}`}>
              <h2>{prod.title}</h2>
              </Link>
              <img className='classImg' src={prod.image} alt="" />
              <p>${prod.price}</p>
              <button className='button'>Agregar al Carrito</button>
              <button className='button'>Ver Detalles</button>
            </div>
          )
          )
        }
        
      </div>
    </div>
  )
}

export default ItemListContainer