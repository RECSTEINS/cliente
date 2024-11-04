import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Demo.css';
import imagen3 from '../../Assets/imagen3.jpg';

function Demo(){
    return(
    <div class="fondo-demo">
        <div class="container mx-5">
        <div class="row align-items-center section-container">
            <div class="col-md-5">
                <h2 class="section-title text-start">Innoventa <span class="text-azul">Premium</span></h2>
                <p class="section-text">
                Descubre todas las herramientas que optimizan tu restaurante. Accede al inventario en tiempo real, 
                ventas simuladas y reportes básicos con nuestra demo.
                </p>
                <a href="#" class="btn btn-demo">Solicita una demo</a>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5 image-section">
                <img src={imagen3} alt="Imagen de demo"/>
            </div>
        </div>
    </div>
    </div>
    
    )
}

export default Demo;