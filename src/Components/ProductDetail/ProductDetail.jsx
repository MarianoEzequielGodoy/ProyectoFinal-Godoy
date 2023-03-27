import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, getFirestore, collection } from 'firebase/firestore'

const ProductDetail = () => {

const { id } = useParams();
const [product, setProduct] = useState([''])

useEffect(() => {
  const db = getFirestore()
  const shopRef = collection(db, 'items')

  getDocs(shopRef).then((snapshot) => {
  if(snapshot === 0){
      console.log("No hay resultados")
  }    
  setProduct(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  })

}, [id])

const selectItem = product.find(product => product.id === id)

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
            selectItem ?
            <>
            <h2>{selectItem.title}</h2>
            <img src={selectItem.imageId} alt="" />
            <p>{selectItem.description}</p>
            <p>U$S {selectItem.price}</p>
            <button style={{
            backgroundColor: '#0077ff',
            borderRadius: '5px',
            width: '50%',
            margin: '0px 180px',
            border: 'none',
            fontSize: '16px',
            }}>Agregar al Carrito</button>
            
            </>

            :

            <p>Cargando...</p>
        }
    </div>
  )
}

export default ProductDetail