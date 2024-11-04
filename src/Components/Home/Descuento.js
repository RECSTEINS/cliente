import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Descuento.css'

function Descuentos(){
    return(
        <div class="fondo-descuento">
            <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="discount-box">
                        <p class="display-4 font-weight-bold discount-porcentaje">-20%</p>
                        <p class="discount-texto-box">De descuento en Membresía <span class="premium">Premium</span></p>
                        <p class="discount-code">Código de descuento</p>
                        <p class="discount-code-text">INNO20</p>
                        <p class="discount-term">Primer mes a menor costo</p>
                        <div class="d-flex justify-content-center mt-3 discount-arrow">
                            <button class="btn btn-link"><a><i class="bi bi-arrow-left-circle-fill discount-arrow-left"></i></a></button>
                            <button class="btn btn-link"><a><i class="bi bi-arrow-right-circle-fill discount-arrow-right"></i></a></button>
                        </div>
                    </div>
                </div>


                <div class="col-md-6  flex-column info-discount">
                    <p class="discount-title">INNOVENTA</p>
                    <p class="font-weight-bold discount-text">Descuentos especiales para tu restaurante</p>
                    <p class="discount-subtext">Aprovecha nuestras promociones para gestionar tu negocio.</p>
                    <button href="#" class="apply-button mt-3 justify-content-center">Aplicar ahora</button>
                </div>
            </div>
            <div class="row footer-links text-center mt-5">
                <div class="col-md-12">
                    <a href="#" class="text-dark mr-4 discount-cont">Contáctanos</a>
                    <a href="#" class="text-dark discount-cont">Conoce Todos Nuestros Descuentos</a>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Descuentos;