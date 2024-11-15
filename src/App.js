import NavBar from "./Components/Home/Navbar";
import Presentacion from "./Components/Home/Presentacion";
import Funcionalidades from "./Components/Home/Funcionalidades";
import Demo from "./Components/Home/Demo";
import Funcionamiento from "./Components/Home/Funcionamiento";
import Casos from "./Components/Home/Casos";
import Descuentos from "./Components/Home/Descuento";
import Brindamos from "./Components/Home/Brindamos";
import Planes from "./Components/Home/Planes";
import Footer from "./Components/Home/Footer";
import Resenas from "./Components/Home/Resenas";
import Elite from "./Components/Home/Elite";

function App() {
  return (
    <div>
      <NavBar/>
      <Presentacion/>

      <Funcionalidades/>
 
      <Demo/>
      <Planes/>

      <Elite/>
      {/*<Funcionamiento/>*/}
      
      <Casos/>
      <Descuentos/>
      <Brindamos/>
      <Resenas/>
      <Footer/>
    </div>
  );
}

export default App;
