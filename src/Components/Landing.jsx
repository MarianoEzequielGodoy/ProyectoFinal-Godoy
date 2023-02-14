import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Navbar from './Navbar/Navbar'

const Landing = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Bienvenido, por el momento no hay productos." />
    </>
  )
}

export default Landing