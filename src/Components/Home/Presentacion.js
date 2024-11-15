import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Presentacion.css';
import { Button } from 'bootstrap';
import imagen1 from "../../Assets/imagen1_editada_presentacion.JPG"
import imagen2 from "../../Assets/imagen2_editada.JPG"
import imagen3 from "../../Assets/imagen3_presentacion_editada.JPG"

function Presentacion(){
    return(
        <div class="presentacion-fondo">
            <div class="container">
                <div class="row align-items-center mx-5">        
                    <div class="col-12 text-left prueba">
                        <p class="display-4 presentacion-title">Gestiona tu negocio como un profesional.</p>
                    </div>
                    <div class="col-7 text-left prueba2">
                        <p class="presentacion-text">InnoVenta: Gestión que se adapta</p>
                        <p class="presentacion-text2">resultados que crecen.</p>
                        <p class="presentacion-subtext1">Empieza con total tranquilidad. Si cambias de idea,</p>
                        <p class="presentacion-subtext2">tenemos garantía de reembolso por 30 días.</p>
                        <button class="btn btn-warning">Obtén Membresía</button>
                    </div>
                    <div class="col-5">
                        <div class="image-grid">                  
                            <img src={imagen1} alt="Imagen 1" class="grid-image presentacion-imagen-1"/>
                            <img src={imagen2} alt="Imagen 2" class="grid-image presentacion-imagen-2"/>
                            <img src={imagen3} alt="Imagen 3" class="grid-image presentacion-imagen-3"/>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Presentacion;