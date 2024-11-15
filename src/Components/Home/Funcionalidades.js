import 'bootstrap/dist/css/bootstrap.min.css';
//import './css/Presentacion.css';
import { Button } from 'bootstrap';
import './css/Funcionalidades.css'
import imagen13 from '../../Assets/imagen12.jpg';

function Funcionalidades(){
    return(
        <div class="fondo-funcionalidades">
            <div class="container py-5">
                <div class="row mx-5"> 
                    <div class="col-12">
                        <p class="section-titles mx-5 funcionalidades-title">¿Por qué elegir <span class="highlight-text-blue">Inno</span><span class="highlight-text">venta</span>?</p>
                    </div>
                    <div class="col-5 text-start aling-item-left">
                        <p class="subheading mx-5">Porque inoventa gestiona las mejores herramientas , usuarios ,roles ,ventas y pagos.</p>
                        <p class="subheading mx-5">también cuenta con un control de inventario en tiempo real y una membresía premium para funciones avanzadas.</p>
                        
                    
                        <div class="d-flex justify-content-start gap-3 funcionalidades-button mx-5">
                            <button class="btn btn-warning boton-comenzar"><stong>Contacto </stong></button>
                        </div>
                    </div>
                    <div class="col-7 image-grid-funcionalidades">
                        <img src={imagen13} class="grid-image-funcionalidades imagen13"/>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Funcionalidades;