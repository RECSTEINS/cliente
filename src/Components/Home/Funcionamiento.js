import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import "./css/Funcionamiento.css"
import imagen4 from '../../Assets/imagen4.jpg';
import imagen3 from '../../Assets/imagen3_editada.JPG';
import imagen5 from '../../Assets/imagen5_editada.JPG';

function Funcionamiento(){
    return(
        <div class="fondo-funcionamiento">
            <div class="container ms-5">
                <h1 class="text-center step-main-title">Simplificando la gestión paso a paso.</h1>
                <div class="col-12  step-container mx-5">
                    <div class="text-start mt-5 pe-3 col-3">
                        <p class="step-number">Paso 1</p>
                        <h3 class="step-text">Registro<i className="bi bi-arrow-up-right flecha"></i></h3>
                        <p class="step-info">El mesero ingresa órdenes directamente en el sistema, verificando el inventario en</p> 
                        <p class="no">tiempo real.</p>
                    </div>
                    <div class="step-image col-8 mt-5 ms-5">
                        <img src={imagen4} alt="Registro" class="img-fluid"/>
                    </div>
                </div>
                <div class='col-12 step-container mt-5 mx-5'>
                    <div class="text-start pe-3 col-3">
                        <p class="step-number">Paso 2</p>
                        <h3 class="step-text">Métodos<i className="bi bi-arrow-up-right flecha"></i></h3>
                        <p class="step-info">El cajero realiza el cobro utilizando múltiples métodos de pago.</p>
                    </div>
                    <div class="step-image col-8 ms-5">
                        <img src={imagen3} alt="pago" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-12 step-container mt-5 mx-5">
                    <div class="text-start pe-3 col-3 mb-5" >
                        <p class="step-number">Paso 3</p>
                        <h3 class="step-text">Análisis<i className="bi bi-arrow-up-right flecha"></i></h3>
                        <p class="step-info">El sistema actualiza el inventario automáticamente y genera reportes diarios para el administrador.</p>    
                    </div>
                    <div class="step-image col-8 mb-5 ms-5">
                        <img src={imagen5} alt="análisis" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funcionamiento;