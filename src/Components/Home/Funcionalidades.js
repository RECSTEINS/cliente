import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/Presentacion.css';
import { Button } from 'bootstrap';
import './css/Funcionalidades.css'
import imagen13 from '../../Assets/imagen12.jpg';

function Funcionalidades(){
    return(
        <div class="fondo-funcionalidades">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-7 text-start aling-item-left">
                        <p class="section-titles mx-5 funcionalidades-title">¿Por qué elegir <span class="highlight-text">Innoventa</span>?</p>
                        <p class="subheading mx-5">Empieza a Gestionar con las Mejores Herramientas</p>
                        <ul class="features-list mx-5">
                            <li>Gestión de Usuarios y Roles</li>
                            <li class="highlight-item">Control de Inventarios en Tiempo Real <i class="bi bi-check-circle-fill naranja"></i></li>
                            <li>Gestión de Ventas y Pagos</li>
                            <li>Reportes y Análisis</li>
                            <li>Membresía Premium para Funciones Avanzadas</li>
                        </ul>
                    
                        <div class="d-flex justify-content-start gap-3 funcionalidades-button mx-5">
                            <button class="btn btn-warning boton-comenzar">Comenzar <i class="bi bi-cart-fill"></i></button>
                            <a class="funcionalidades-contact">Contáctanos</a>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="image-grid imagen13">
                            <img src={imagen13}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funcionalidades;