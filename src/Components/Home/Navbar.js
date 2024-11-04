import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css';
import { Button } from 'bootstrap';
import logo from '../../Assets/Logo.png';

function NavBar(){
    return(
        <header class="custom-navbar py-3">
        <div class="container d-flex justify-content-between align-items-center">
          <img src={logo} alt="InnoVenta Logo" class="logo"/>
          <nav>
            <ul class="nav">
              <li class="nav-item"><a href="#inicio" class="nav-link text-white">Inicio</a></li>
              <li class="nav-item"><a href="#Membresia" class="nav-link text-white">Membresía</a></li>
              <li class="nav-item"><a href="#productos" class="nav-link text-white">Productos</a></li>
              <li class="nav-item"><a href="#contacto" class="nav-link text-white">Contacto</a></li>
            </ul>
          </nav>
          <a href="#comenzar" class="btn btn-warning">Comenzar</a>
        </div> 
      </header>
    )
}

export default NavBar;