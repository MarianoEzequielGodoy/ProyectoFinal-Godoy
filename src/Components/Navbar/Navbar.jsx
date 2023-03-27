import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';



const Navbar = () => {
const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)

const [isOpen, setIsOpen] = useState(false)

const handleMouseEnter =() => {
  setIsOpen(true)
}

const handleMouseLeave = () => {
  setIsOpen(false)
}



  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div class="container-fluid">
    <a class="navbar-brand p-3 m-3" href="/">CODER SHOP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item p-3 m-3" ><Link to={'/'} style={{textDecoration: "none", color: "black"}}>Incio</Link>
        </li>
        <li class="nav-item p-3 m-3">
          <Link to={'/about'} style={{textDecoration: "none", color: "black"}}>Nosotros</Link>
        </li>
        <li class="nav-item p-3 m-3">
          <Link to={'/faq'} style={{textDecoration: "none", color: "black"}}>FAQ</Link>
        </li>
        <li class="nav-item dropdown p-3 m-3">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Streetwear</a></li>
            <li><a class="dropdown-item" href="/">Basketball</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="w-25 h-25" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <a href="/" style={{color:"black"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg>
  </a>
  {
    cart.lenght > 0 &&(
      <span style={{backgroundColor: "red", borderRadius:"50%",padding: "4px 8px", color: "white"}}>{getTotalQuantity}</span>
    )
  }

  {
    isOpen && (
      <div>
        <ul>
          {cart.map((item) => (
            <li>
              <span>{item.title} | <span style={{color:"green"}}>{item.quantity}</span> | <span><b>{item.price*item.quantity}</b></span></span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  </div>
</nav>
  )
}

export default Navbar