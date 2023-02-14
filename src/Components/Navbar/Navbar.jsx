import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CODER SHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FAQ
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Preguntas Frecuentes</a></li>
            <li><a class="dropdown-item" href="#">Soporte Técnico</a></li>
            <li><a class="dropdown-item" href="#">Contacto</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
    </>
  )
}

export default Navbar