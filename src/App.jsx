
import MostrarMensaje from "./components/MostrarMensaje"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="centrar main pt-5">
    <h1>Hello my friends <MostrarMensaje/></h1>
    </div>
      
      <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
