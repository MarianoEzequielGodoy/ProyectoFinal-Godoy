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

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">CODER SHOP</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item p-3 m-3">
        <Link to={'/'} style={{textDecoration: "none", color: "black"}}>Incio</Link>
        </li>
        <li class="nav-item p-3 m-3">
          <Link to={'/about'} style={{textDecoration: "none", color: "black"}}>Nosotros</Link>
        </li>
        <li class="nav-item p-3 m-3">
          <Link to={'/faq'} style={{textDecoration: "none", color: "black"}}>FAQ</Link>
        </li>
        </ul>
        <li style={{listStyle: "none"}}>
          <div
            className="cart-dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <i class="bi bi-cart4 d-flex justify-content-end"></i>

              {cart.length > 0 && (
                <span
                  className="badge badge-pill badge-danger ml-1"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px 8px",
                    color: "white",
                  }}>
                  {getTotalQuantity()}
                </span>
              )}
              {isOpen && (
                <div className="cart-dropdown">
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <span> {item.title} | <span style={{color: 'green'}}>x{item.quantity}</span> <b>${item.price*item.quantity}</b></span>
                      </li>
                    ))}
                  </ul>
                  { 
                  cart.length > 0 &&
                  <div style={{marginTop: '20px'}}>
                    <ul>
                      <span><u>Productos totales:</u> {getTotalQuantity()} </span>
                    </ul>
                    <ul>
                    <span><u>Total a pagar:</u> ${getTotal()} </span>
                    <button type="button" class="btn btn-dark btn-sm" onClick={() => clearCart()}>Vaciar</button>
                  </ul>

                  </div>
                  }
                </div>
              )}
          </div>
        </li>
    </nav>
  );
}
export default Navbar