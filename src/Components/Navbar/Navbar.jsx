import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} style={{textDecoration:'none', color:'black', padding:'10px'}}>CODER SHOP</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'} style={{textDecoration:'none', color:'black', padding:'10px'}}>Inicio</Link>
      </li>
      <li class="nav-item">
        <Link to={'/products'} style={{textDecoration:'none', color:'black', padding:'10px'}}>Productos</Link>
      </li>
      <li class="nav-item dropdown">
        <Link to={'/about'} style={{textDecoration:'none', color:'black', padding:'10px'}}>Nosotros</Link>
      </li>
    </ul>
  </div>
  <CartWidget />
</nav>
  )
}

export default Navbar