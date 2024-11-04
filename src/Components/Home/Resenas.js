import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Resenas.css'
import card1 from '../../Assets/card1.jpg';
import card2 from '../../Assets/card2.jpg';
import card3 from '../../Assets/card3.jpg';
import card4 from '../../Assets/card4.jpg';
import card5 from '../../Assets/card5.jpg';
import card6 from '../../Assets/card6.jpg';

function Resenas(){
    return(
        <div class="container mx-5">
            <h2 class="section-title">Lea las reseñas que han dejado los usuarios del sistema InnoVenta</h2>
                <div class="row">
        
                    <div class="col-md-4">
                        <div class="review-card">
                            <div class="ajustes-card">
                                <img src={card1} alt="Foto de Alejandra Hernandez"/>
                                <h5>Paola Reyes</h5>
                                <div class="stars">★★★★★</div>
                                <p>Dueña y administradora del restaurante Rosa Negra</p>
                            </div>
                
                            <div class="d-grid gap-2 btn-mas">
                                <p class="color-btn">Más información</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-md-4">
                        <div class="review-card">
                            <div class="ajustes-card">
                                <img src={card2} alt="Foto de Raúl Gonzáles"/>
                                <h5>Raúl Gonzáles</h5>
                                <div class="stars">★★★★★</div>
                                <p>Dueño y administrador del restaurante Sabores del mar</p>
                            </div>
                            <div class="d-grid gap-2 btn-mas">
                                <p class="color-btn">Más información</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="review-card">
                            <div class="ajustes-card">
                                <img src={card3} alt="Foto de Mario y Rafael Suarez"/>
                                <h5>Mario y Rafael Suarez</h5>
                                <div class="stars">★★★★★</div>
                                <p>Dueños y administradores del restaurante Brother's Suarez</p>
                            </div>
                            <div class="d-grid gap-2 btn-mas">
                                <p class="color-btn">Más información</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-md-4">
                        <div class="review-card">
                            <div class="ajustes-card">
                                <img src={card4} alt="Foto de Chris Jones"/>
                                <h5>Chris Jones</h5>
                                <div class="stars">★★★★★</div>
                                <p>Dueño y administrador del restaurante Kaajal</p>
                            </div>
                            <div class="d-grid gap-2 btn-mas">
                                <p class="color-btn">Más información</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-md-4">
                        <div class="review-card">
                            <div class="ajustes-card">
                                <img src={card5} alt="Foto de Michael Williams"/>
                                <h5>Michael Williams</h5>
                                <div class="stars">★★★★★</div>
                                <p>Dueño y administrador del restaurante Rio’s</p>
                            </div>
                            <div class="d-grid gap-2 btn-mas">
                                <p class="color-btn">Más información</p>
                            </div>
                        </div>
                </div>
                <div class="col-md-4">
                    <div class="review-card">
                        <div class="ajustes-card">
                            <img src={card6} alt="Foto de Ana Martinez"/>
                            <h5>Ana Martinez</h5>
                            <div class="stars">★★★★★</div>
                            <p>Dueña y administradora del restaurante Tarasira</p>
                        </div>
                        <div class="d-grid gap-2 btn-mas">
                            <p class="color-btn">Más información</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resenas;