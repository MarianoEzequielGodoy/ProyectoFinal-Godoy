import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

const { id } = useParams();
const [product, setProduct] = useState([''])

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(dataJson=>setProduct(dataJson))
}, [id])

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
        margin: '20px',
        padding: '20px',
        alignContent: 'center',
        backgroundColor: '#FFF',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.2)',
    }}>
        {
            product ?
            <>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button style={{
            backgroundColor: '#609966',
            borderRadius: '5px',
            width: '50%',
            margin: '0px 180px',
            border: 'none'
            }}>Agregar al Carrito</button>
            
            </>

            :

            <p>Cargando...</p>
        }
    </div>
  )
}

export default ProductDetail