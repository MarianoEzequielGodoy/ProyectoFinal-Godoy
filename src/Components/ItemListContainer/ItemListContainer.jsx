import React, { useEffect, useState } from 'react'

const ItemListContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(dataJson=>setData(dataJson))
  }, [])
  

  console.log(data)


  return (
    <div>
      <h1 style={{textAlign:'center', fontWeight:'bold', color:'#333'}}>Lista de Productos</h1>
      <div>
        {
          data.map(prod => (
            <div style={{display:'flex', background:'#FFF', margin:'10px 0', borderRadius:'5px', boxShadow:'0px 3px 3px rgba(0,0,0,0.1)', padding:'10px'}}>
              <h2>{prod.title}</h2>
              <img style={{width:'30%', height:'40%'}} src={prod.image} alt="" />
              <p>${prod.price}</p>
            </div>

          )
          )
        }
        
      </div>
    </div>
  )
}

export default ItemListContainer