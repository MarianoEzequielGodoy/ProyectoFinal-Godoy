import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './navbar.css'



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CODER SHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" ><Link to={'/'}>Incio</Link>
        </li>
        <li class="nav-item">
          <Link to={'/about'}>Nosotros</Link>
        </li>
        <li class="nav-item">
          <Link to={'/faq'}>FAQ</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hombre</a></li>
            <li><a class="dropdown-item" href="#">Mujer</a></li>
            <li><a class="dropdown-item" href="#">Accesorios</a></li>
            <li><a class="dropdown-item" href="#">Computacion</a></li>
            <li><a class="dropdown-item" href="#">Todos</a></li>
          </ul>
        </li>
      </ul>
    </div>
        <CartWidget />
  </div>
</nav>
  )
}

export default Navbar