import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Rotas e Hooks
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Projeto from './paginas/Projeto';
//Componentes
import Header from "./components/Header/Header";
import GlobalStyles from './components/GlobalStyles/GlobalStyles';





function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header />
        <Routes>
          <Route path="https://gs2-kappa.vercel.app/Home" element={<Home />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/Projeto" element={<Projeto />} />
          <Route path="*" element={<div>Página não encontrada...</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
