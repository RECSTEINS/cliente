import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Presentacion.css';
import { Button } from 'bootstrap';
import imagen1 from "../../Assets/imagen1_editada.JPG"
import imagen2 from "../../Assets/imagen2_editada.JPG"
import imagen3 from "../../Assets/imagen3_presentacion_editada.JPG"

function Presentacion(){
    return(
        <div class="presentacion-fondo">
            <div class="container">
                <div class="row align-items-center mx-5">
        
                    <div class="col-md-6 text-left prueba">
                        <p class="display-4 presentacion-title">Gestiona tu negocio como un profesional.</p>
                        <p class="presentacion-text">La solución definitiva para restaurantes: controla ventas, automatiza pagos, gestiona inventarios y accede a reportes.</p>
                        <p><strong>InnoVenta: Gestión que se adapta, resultados que crecen.</strong></p>
                        <button class="btn btn-warning">Obtén Membresía</button>
                    </div>
            
            
                    <div class="col-md-6">
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