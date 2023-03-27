import React, { useContext, useEffect, useState } from 'react'
import { getDocs, getFirestore, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import '../ItemListContainer/itemListContainer.css'
import { CartContext } from '../../Context/CartContext'



const ItemList = () => {

const { addToCart, removeFromCart } = useContext(CartContext)


const [items, setItems] = useState()

useEffect(() => {
    const db = getFirestore()
    const shopRef = collection(db, 'items')

    getDocs(shopRef).then((snapshot) => {
    if(snapshot === 0){
        console.log("No hay resultados")
    }    
    setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })

  }, [])

return (
  
<div className='flex-container'>

  {items ? (
      items.map((item) =>(
        <div key={item.id} className="card">
          <Link to={`/product/${item.id}`} style={{textDecorationLine: "none", color: "black"}}>
            <img src={item.imageId} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: U$S {item.price}</p>
            <p>Stock: {item.stock}</p>
          </Link>
            <div class="d-flex align-items-end d-flex align-items-end">
            <button onClick={() => addToCart(item.id, 1)} type="button" class="btn btn-outline-secondary m-3" >Agregar al Carrito</button>
            <button onClick={() => removeFromCart(item.id)} type="button" class="btn btn-outline-danger m-3" >Eliminar</button>
            </div>
        </div>
      ))
      ) : (
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    </div>
  </div>
  )}
</div>
)
}


export default ItemList