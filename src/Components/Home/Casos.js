import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Casos.css';
import imagen6 from '../../Assets/imagen6.png';
import imagen7 from '../../Assets/imagen7.jpg';

function Casos(){
    return(
        <div class="fondo-casos">
            <div class="container text-center ">
                <p class="highlight-title">Restaurantes que Crecen con <span class="highlight-text">InnoVenta</span></p>
                <div class="row my-5 mx-5">
    
                    <div class="col-md-5 mb-4 col-5">
                        <div class="circle-image-1 mx-auto"></div>
                        <p class="caso">Parrilla La Tradición</p>
                        <p class="highlight-description"><span class="highlight-text">20%</span> de Reducción en Pérdidas de Inventario</p>
                        <h1><i class="bi bi-graph-up-arrow"></i></h1>
                        <p class="highlight-calif">Calificación de <span class="highlight-text">4.8/5</span> en Reseñas</p>
                        <a href="#" class="text-primary highlight-link">Ver Historia Completa</a>
                    </div>

                    <div class="col-2"></div>
                
                    <div class="col-md-5 mb-4 col-5">
                        <div class="circle-image-2 mx-auto"></div>
                        <p class="caso">Restaurante La Playa, Cancún, México</p>
                        <p class="highlight-description">Reducción del <span class="highlight-text">20%</span> en tiempos de espera</p>
                        <h1><i class="bi bi-graph-up-arrow"></i></h1>
                        <p class="highlight-calif">Incremento de ventas en un <span class="highlight-text">30%</span></p>
                        <a href="#" class="text-primary highlight-link">Ver Historia Completa</a>
                    </div>
                </div>
             
                <p class="hihjlight-end">¿Quieres que tu restaurante sea nuestro próximo caso de éxito?</p>
                <a href="#" class="cta-button highlight-button ">Obtén Membresía</a>
            </div>
        </div>
    )
}

export default Casos;